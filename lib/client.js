"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const axios_1 = __importDefault(require("axios"));
const bottleneck_1 = __importDefault(require("bottleneck"));
function createClient(config, reporter) {
    const { apiVersion, myshopifyDomain, adminAccessToken, storefrontShopDomain, storefrontAccessToken, shopifyPlus, } = config;
    // Implement weird cost based leaky bucket for gql
    // https://shopify.dev/concepts/about-apis/rate-limits#graphql-admin-api-rate-limits
    // Implement leaky bucket for rest
    // https://shopify.dev/concepts/about-apis/rate-limits#rest-admin-api-rate-limits
    const admin = axios_1.default.create({
        baseURL: `https://${myshopifyDomain}/admin/api/2020-04`,
        headers: {
            'X-Shopify-Access-Token': adminAccessToken,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
    admin.interceptors.response.use(function (response) {
        if (response.data.errors) {
            throw new Error(`Shopify admin API responded with error: ${JSON.stringify(response.data.errors)}`);
        }
        return response;
    });
    const storefrontClient = axios_1.default.create({
        baseURL: `https://${storefrontShopDomain}/api/${apiVersion}/graphql`,
        method: 'post',
        headers: {
            'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
    // Implement weird time based leaky bucket
    // https://shopify.dev/concepts/about-apis/rate-limits#storefront-api-rate-limits
    const settings = {
        minTime: 100,
        maxConcurrent: 3,
        strategy: bottleneck_1.default.strategy.BLOCK,
        reservoir: shopifyPlus ? 120 : 60,
        reservoirIncreaseInterval: 1000,
        reservoirIncreaseAmount: 2,
        reservoirIncreaseMaximum: shopifyPlus ? 240 : 120,
    };
    const storefrontLimiter = new bottleneck_1.default(settings);
    async function currentReservoir() {
        var _a;
        return (_a = (await storefrontLimiter.currentReservoir())) !== null && _a !== void 0 ? _a : 0;
    }
    async function decrementReservoir(amount) {
        const current = await currentReservoir();
        if (current - amount > 0) {
            await storefrontLimiter.incrementReservoir(0 - amount);
        }
        else {
            await storefrontLimiter.incrementReservoir(current);
        }
    }
    const storefront = async (name, query, variables) => {
        reporter.verbose(`[Shopify] Scheduling storefront graphql request "${name}" (reservoir: ${await currentReservoir()})`);
        return await storefrontLimiter.schedule({ id: name }, async () => {
            reporter.verbose(`[Shopify] Executing storefront graphql request "${name}" (reservoir: ${await currentReservoir()})`);
            const startTime = Date.now();
            const { data: responseBody } = await storefrontClient({
                data: {
                    query,
                    variables,
                },
            });
            reporter.verbose(`[Shopify] Storefront graphql request "${name}" took ${Date.now() - startTime}ms`);
            // Remove extra cost from the reservoir
            const cost = Math.ceil(Math.max(500, Date.now() - startTime) / 1000) * 2 - 2;
            if (cost > 0) {
                reporter.verbose(`[Shopify] Deducting additional ${cost} from storefront reservoir`);
                await decrementReservoir(cost);
            }
            if (!responseBody.data) {
                throw new Error('TIMEOUT');
            }
            reporter.verbose(`[Shopify] Storefront graphql request "${name}" complete`);
            return responseBody.data;
        });
    };
    storefrontLimiter.on('error', async (error) => {
        reporter.panic(`[Shopify] Storefront graphql request failed:`, error);
        return null;
    });
    storefrontLimiter.on('failed', async (error, jobInfo) => {
        const name = jobInfo.options.id;
        if (error.message === 'TIMEOUT') {
            if (jobInfo.retryCount < 5) {
                const delay = 1000 * 2 ** jobInfo.retryCount;
                reporter.verbose(`[Shopify] Storefront graphql request "${name}" timeout, retrying in ${delay}ms`);
                return delay;
            }
            reporter.panic(`[Shopify] Storefront graphql request "${name}" exceeded maximum retry count`);
            return null;
        }
        reporter.panic(`[Shopify] Storefront graphql request "${name}" failed:`, error);
        return null;
    });
    function destroy() {
        storefrontLimiter.disconnect();
    }
    return { storefront, admin, version: apiVersion, destroy };
}
exports.createClient = createClient;
//# sourceMappingURL=client.js.map