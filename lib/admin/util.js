"use strict";
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
exports.batchAllNodesFactory = void 0;
function batchAllNodesFactory(fetcher, con, vars, size = 50) {
    return function batchAllNodes(client, context) {
        return __asyncGenerator(this, arguments, function* batchAllNodes_1() {
            const variables = vars(context);
            let { edges, pageInfo: { hasNextPage }, } = yield __await(fetcher(client, Object.assign(Object.assign({}, variables), { first: 250 })));
            while (1) {
                if (!edges.length) {
                    break;
                }
                const batch = [];
                let batchCursor = undefined;
                while (1) {
                    if (batch.length === size || !edges.length) {
                        break;
                    }
                    const edge = edges.shift();
                    if (!edge) {
                        throw new Error('Assert');
                    }
                    if (!con(edge.node, context)) {
                        yield yield __await(batch);
                        return yield __await(void 0);
                    }
                    batch.push(edge.node);
                    batchCursor = edge.cursor;
                }
                yield yield __await(batch);
                if (edges.length < size && hasNextPage) {
                    ({
                        edges,
                        pageInfo: { hasNextPage },
                    } = yield __await(fetcher(client, Object.assign(Object.assign({}, variables), { first: 250, after: edges.length ? edges[edges.length - 1].cursor : batchCursor }))));
                }
            }
        });
    };
}
exports.batchAllNodesFactory = batchAllNodesFactory;
//# sourceMappingURL=util.js.map