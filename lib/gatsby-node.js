"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceNodes = void 0;
const date_fns_1 = require("date-fns");
const config_1 = require("./config");
const client_1 = require("./client");
const queries_1 = require("./queries");
const nodes_1 = require("./nodes");
const constants_1 = require("./constants");
const product_events_1 = require("./admin/product-events");
const admin_1 = require("./admin");
const cache_1 = require("./cache");
// TODO do this based on the chosen api version
exports.createSchemaCustomization = (context, pluginConfig) => {
    const { actions: { createTypes }, } = context;
    // TODO annotate based on API version
    // TODO only add types based on included types
    const config = config_1.parseConfig(pluginConfig);
    const typeDefs = /* GraphQL */ `
    # Product
    type ${constants_1.TYPE_PREFIX}${constants_1.NodeType.PRODUCT_VARIANT} implements Node {
      price: String! @deprecated(reason: "Use priceV2 instead")
      compareAtPrice: String @deprecated(reason: "Use compareAtPriceV2 instead")
    }

    type ${constants_1.TYPE_PREFIX}${constants_1.NodeType.PRODUCT} implements Node {
      updatedAt: Date! @dateformat
    }

    # Collection
    type ${constants_1.TYPE_PREFIX}${constants_1.NodeType.COLLECTION} implements Node {
      updatedAt: Date! @dateformat
    }

    type ${constants_1.TYPE_PREFIX}${constants_1.NodeType.COLLECTION}Image implements Node {
      src: String @deprecated(reason: "Previously an image had a single src field. This could either return the original image location or a URL that contained transformations such as sizing or scale.\\n\\nThese transformations were specified by arguments on the parent field.")
    }

    # Page
    type ${constants_1.TYPE_PREFIX}${constants_1.NodeType.PAGE} implements Node {
      updatedAt: Date! @dateformat
      createdAt: Date! @dateformat
    }

    # Article
    type ${constants_1.TYPE_PREFIX}${constants_1.NodeType.ARTICLE}Author implements Node {
      id: ID!
    }

    type ${constants_1.TYPE_PREFIX}${constants_1.NodeType.ARTICLE}Image implements Node {
      src: String! @deprecated(reason: "Previously an image had a single src field. This could either return the original image location or a URL that contained transformations such as sizing or scale.\\n\\nThese transformations were specified by arguments on the parent field.")
    }

    type ${constants_1.TYPE_PREFIX}${constants_1.NodeType.ARTICLE} implements Node {
      author: ${constants_1.TYPE_PREFIX}${constants_1.NodeType.ARTICLE}Author! @deprecated(reason: "Use authorV2 instead")
      publishedAt: Date! @dateformat
    }
  `;
    createTypes(typeDefs);
};
// TODO cache to detect failed runs and automatically cache bust
async function sourceNodes(context, pluginConfig) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
    const { actions: { createNode, touchNode, deleteNode }, cache, reporter, getNodesByType, getNode, } = context;
    const config = config_1.parseConfig(pluginConfig);
    const client = client_1.createClient(config, reporter);
    const nodeActions = { getNode, createNode, deleteNode };
    // Shop
    const shop = await queries_1.fetchStorefrontShop(client);
    await Promise.all(Object.entries(shop)
        .filter(([, policy]) => !!policy)
        .map(([type, policy]) => nodes_1.ShopPolicyNode(Object.assign(Object.assign({}, policy), { type })).then(createNode)));
    // Products
    const productCacheKey = cache_1.getCacheKey(config, constants_1.NodeType.PRODUCT);
    const lastProductImport = await cache.get(productCacheKey);
    const productStartTime = Date.now();
    if (!lastProductImport) {
        reporter.info('[Shopify] No products cache found, starting full product import');
        // TODO handle no published products
        let count = 0;
        try {
            for (var _h = __asyncValues(queries_1.loadAllStorefrontProducts(client)), _j; _j = await _h.next(), !_j.done;) {
                let product = _j.value;
                await nodes_1.createProductNode(product, nodeActions);
                count++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_a = _h.return)) await _a.call(_h);
            }
            finally { if (e_1) throw e_1.error; }
        }
        reporter.info(`[Shopify] Finished importing ${count} products`);
    }
    else {
        // Shopify takes it's time updating the events api
        // a 5m delta seems to catch all the needed updates
        const since = new Date(lastProductImport - 5 * 60 * 1000);
        reporter.info(`[Shopify] Importing product changes from last ${date_fns_1.formatDistanceToNowStrict(since)} (since ${since.toISOString().substring(0, 19)})`);
        // Ensure nodes are not garbage collected
        // TODO clean this up
        getNodesByType(`${constants_1.TYPE_PREFIX}${constants_1.NodeType.PRODUCT}`).forEach((node) => touchNode({ nodeId: node.id }));
        getNodesByType(`${constants_1.TYPE_PREFIX}${constants_1.NodeType.PRODUCT_METAFIELD}`).forEach((node) => touchNode({ nodeId: node.id }));
        getNodesByType(`${constants_1.TYPE_PREFIX}${constants_1.NodeType.PRODUCT_VARIANT}`).forEach((node) => touchNode({ nodeId: node.id }));
        getNodesByType(`${constants_1.TYPE_PREFIX}${constants_1.NodeType.PRODUCT_VARIANT_METAFIELD}`).forEach((node) => touchNode({ nodeId: node.id }));
        let deletions = 0;
        let updates = 0;
        try {
            for (var _k = __asyncValues(product_events_1.productEventsSince(client, since)), _l; _l = await _k.next(), !_l.done;) {
                let productEvent = _l.value;
                if (productEvent.type === admin_1.EventType.Create) {
                    nodes_1.upsertProductNode(productEvent, nodeActions);
                    updates++;
                }
                else {
                    nodes_1.deleteProductNode(productEvent.storefrontId, nodeActions);
                    deletions++;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_l && !_l.done && (_b = _k.return)) await _b.call(_k);
            }
            finally { if (e_2) throw e_2.error; }
        }
        reporter.info(`[Shopify] Finished importing product changes: ${updates} updated and ${deletions} removed`);
    }
    await cache.set(productCacheKey, productStartTime);
    // Collections
    if (config.includeCollections) {
        const collectionCacheKey = cache_1.getCacheKey(config, constants_1.NodeType.COLLECTION);
        const lastCollectionImport = await cache.get(collectionCacheKey);
        const collectionStartTime = Date.now();
        if (!lastCollectionImport) {
            reporter.info('[Shopify] No collections cache found, starting full collection import');
            // TODO handle no published collections
            let count = 0;
            try {
                for (var _m = __asyncValues(queries_1.loadAllStorefrontCollections(client)), _o; _o = await _m.next(), !_o.done;) {
                    let collection = _o.value;
                    await nodes_1.createCollectionNode(collection, nodeActions);
                    count++;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_o && !_o.done && (_c = _m.return)) await _c.call(_m);
                }
                finally { if (e_3) throw e_3.error; }
            }
            reporter.info(`[Shopify] Finished importing ${count} collections`);
        }
        else {
            // Shopify takes it's time updating the events api
            // a 5m delta seems to catch all the needed updates
            const since = new Date(lastCollectionImport - 5 * 60 * 1000);
            reporter.info(`[Shopify] Importing collection changes from last ${date_fns_1.formatDistanceToNowStrict(since)} (since ${since.toISOString().substring(0, 19)})`);
            // Ensure nodes are not garbage collected
            getNodesByType(`${constants_1.TYPE_PREFIX}${constants_1.NodeType.COLLECTION}`).forEach((node) => touchNode({ nodeId: node.id }));
            let deletions = 0;
            let updates = 0;
            try {
                for (var _p = __asyncValues(admin_1.collectionEventsSince(client, since)), _q; _q = await _p.next(), !_q.done;) {
                    let collectionEvent = _q.value;
                    if (collectionEvent.type === admin_1.EventType.Create) {
                        nodes_1.createCollectionNode(collectionEvent.node, nodeActions);
                        updates++;
                    }
                    else {
                        nodes_1.deleteCollectionNode(collectionEvent.storefrontId, nodeActions);
                        deletions++;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_q && !_q.done && (_d = _p.return)) await _d.call(_p);
                }
                finally { if (e_4) throw e_4.error; }
            }
            reporter.info(`[Shopify] Finished importing collection changes: ${updates} updated and ${deletions} removed`);
        }
        await cache.set(collectionCacheKey, collectionStartTime);
    }
    // Following types are not yet incremental
    // Pages
    if (config.includePages) {
        reporter.info('[Shopify] Starting full page import');
        let count = 0;
        try {
            for (var _r = __asyncValues(queries_1.loadAllStorefrontPages(client)), _s; _s = await _r.next(), !_s.done;) {
                let page = _s.value;
                await nodes_1.createPageNode(page, nodeActions);
                count++;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_s && !_s.done && (_e = _r.return)) await _e.call(_r);
            }
            finally { if (e_5) throw e_5.error; }
        }
        reporter.info(`[Shopify] Finished importing ${count} pages`);
    }
    // Blogs and Articles
    if (config.includeBlogs) {
        reporter.info('[Shopify] Starting blog import');
        let count = 0;
        try {
            for (var _t = __asyncValues(queries_1.loadAllStorefrontBlogs(client)), _u; _u = await _t.next(), !_u.done;) {
                let blog = _u.value;
                await nodes_1.createBlogNode(blog, nodeActions);
                count++;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_u && !_u.done && (_f = _t.return)) await _f.call(_t);
            }
            finally { if (e_6) throw e_6.error; }
        }
        reporter.info(`[Shopify] Finished importing ${count} blogs`);
        reporter.info('[Shopify] Starting article import');
        count = 0;
        try {
            for (var _v = __asyncValues(queries_1.loadAllStorefrontArticles(client)), _w; _w = await _v.next(), !_w.done;) {
                let article = _w.value;
                await nodes_1.createArticleNode(article, nodeActions);
                count++;
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_w && !_w.done && (_g = _v.return)) await _g.call(_v);
            }
            finally { if (e_7) throw e_7.error; }
        }
        reporter.info(`[Shopify] Finished importing ${count} articles`);
    }
    client.destroy();
}
exports.sourceNodes = sourceNodes;
//# sourceMappingURL=gatsby-node.js.map