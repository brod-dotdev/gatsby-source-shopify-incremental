"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productEventsSince = void 0;
const product_deletes_1 = require("./product-deletes");
const _1 = require(".");
const constants_1 = require("../constants");
const product_updates_1 = require("./product-updates");
const queries_1 = require("../queries");
// TODO factor out event handling code and remove
// duplication with collection events
function productEventsSince(client, since) {
    return __asyncGenerator(this, arguments, function* productEventsSince_1() {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = __asyncValues(product_deletes_1.adminProductDeletes(client, since)), _d; _d = yield __await(_c.next()), !_d.done;) {
                let deletedProductNodes = _d.value;
                for (let node of deletedProductNodes) {
                    yield yield __await({
                        type: _1.EventType.Delete,
                        resource: constants_1.NodeType.PRODUCT,
                        storefrontId: Buffer.from(node.subjectId).toString('base64'),
                    });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) yield __await(_a.call(_c));
            }
            finally { if (e_1) throw e_1.error; }
        }
        let published = [];
        try {
            for (var _e = __asyncValues(product_updates_1.adminProductUpdates(client, since)), _f; _f = yield __await(_e.next()), !_f.done;) {
                let updatedProductNodes = _f.value;
                for (let node of updatedProductNodes) {
                    if (node.published) {
                        published.push(node.storefrontId);
                    }
                    else {
                        yield yield __await({
                            type: _1.EventType.Delete,
                            resource: constants_1.NodeType.PRODUCT,
                            storefrontId: node.storefrontId,
                        });
                    }
                }
                // TODO avoid this duplication without
                // published array getting large
                // Emit updates here to avoid published
                // array getting very large
                while (published.length > 50) {
                    const batch = published.splice(0, 50);
                    const products = yield __await(queries_1.fetchStorefrontProductsByIds(client, batch));
                    for (let product of products) {
                        if (!product) {
                            // Assume unpublished
                            yield yield __await({
                                type: _1.EventType.Delete,
                                resource: constants_1.NodeType.PRODUCT,
                                storefrontId: batch[products.indexOf(product)],
                            });
                        }
                        else {
                            yield yield __await({
                                type: _1.EventType.Create,
                                resource: constants_1.NodeType.PRODUCT,
                                storefrontId: product.id,
                                node: product,
                            });
                        }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) yield __await(_b.call(_e));
            }
            finally { if (e_2) throw e_2.error; }
        }
        while (published.length) {
            const batch = published.splice(0, 50);
            const products = yield __await(queries_1.fetchStorefrontProductsByIds(client, batch));
            for (let product of products) {
                if (!product) {
                    // Assume unpublished
                    yield yield __await({
                        type: _1.EventType.Delete,
                        resource: constants_1.NodeType.PRODUCT,
                        storefrontId: batch[products.indexOf(product)],
                    });
                }
                else {
                    yield yield __await({
                        type: _1.EventType.Create,
                        resource: constants_1.NodeType.PRODUCT,
                        storefrontId: product.id,
                        node: product,
                    });
                }
            }
        }
    });
}
exports.productEventsSince = productEventsSince;
//# sourceMappingURL=product-events.js.map