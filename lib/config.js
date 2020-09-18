"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseConfig = void 0;
const yup_1 = require("yup");
const types_1 = require("./types");
const PLUGIN_CONFIG_SCHEMA = yup_1.object({
    myshopifyDomain: yup_1.string().required(),
    adminAccessToken: yup_1.string().required(),
    storefrontAccessToken: yup_1.string().required(),
    storefrontShopDomain: yup_1.string().optional(),
    apiVersion: yup_1.mixed()
        .oneOf([types_1.ApiVersion.Apr2020, types_1.ApiVersion.Jul2020])
        .default(types_1.ApiVersion.Apr2020),
    includeCollections: yup_1.boolean().default(true),
    includePages: yup_1.boolean().default(false),
    includeBlogs: yup_1.boolean().default(false),
    shopifyPlus: yup_1.boolean().default(false),
});
function parseConfig(input) {
    var _a;
    const config = PLUGIN_CONFIG_SCHEMA.validateSync(input);
    return Object.assign(Object.assign({}, config), { storefrontShopDomain: (_a = config.storefrontShopDomain) !== null && _a !== void 0 ? _a : config.myshopifyDomain });
}
exports.parseConfig = parseConfig;
//# sourceMappingURL=config.js.map