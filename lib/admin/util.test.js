"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
describe('batchAllNodesFactory', () => {
    it('supports empty response', async () => {
        var e_1, _a;
        const fetcher = jest.fn().mockImplementation(() => {
            return {
                edges: [],
                pageInfo: {
                    hasNextPage: false,
                },
            };
        });
        const batchNodes = util_1.batchAllNodesFactory(fetcher, () => true, () => undefined);
        let batches = [];
        try {
            for (var _b = __asyncValues(batchNodes({}, undefined)), _c; _c = await _b.next(), !_c.done;) {
                let batch = _c.value;
                batches.push(batch);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        expect(batches).toEqual([]);
    });
    it('supports response size under batch size', async () => {
        var e_2, _a;
        const fetcher = jest.fn().mockImplementation(() => {
            return {
                edges: Array.from(Array(10).keys(), (i) => ({ node: i, cursor: i })),
                pageInfo: {
                    hasNextPage: false,
                },
            };
        });
        const batchNodes = util_1.batchAllNodesFactory(fetcher, () => true, () => undefined);
        let batches = [];
        try {
            for (var _b = __asyncValues(batchNodes({}, undefined)), _c; _c = await _b.next(), !_c.done;) {
                let batch = _c.value;
                batches.push(batch);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        expect(batches).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]);
    });
    it('requests more pages as needed', async () => {
        var e_3, _a;
        const fetcher = jest.fn().mockImplementation((client, { after }) => {
            const a = after !== null && after !== void 0 ? after : 0;
            return {
                edges: Array.from(Array(after ? 34 : 50).keys(), (i) => ({
                    node: i + a,
                    cursor: i + a,
                })),
                pageInfo: {
                    hasNextPage: !after,
                },
            };
        });
        const batchNodes = util_1.batchAllNodesFactory(fetcher, () => true, () => undefined);
        let batches = [];
        try {
            for (var _b = __asyncValues(batchNodes({}, undefined)), _c; _c = await _b.next(), !_c.done;) {
                let batch = _c.value;
                batches.push(batch);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        expect(batches).toMatchSnapshot();
    });
    it('exits early based on continue', async () => {
        var e_4, _a;
        const fetcher = jest.fn().mockImplementation((client, { after }) => {
            const a = after !== null && after !== void 0 ? after : 0;
            return {
                edges: Array.from(Array(after ? 34 : 50).keys(), (i) => ({
                    node: i + a,
                    cursor: i + a,
                })),
                pageInfo: {
                    hasNextPage: !after,
                },
            };
        });
        const batchNodes = util_1.batchAllNodesFactory(fetcher, (n) => n < 73, () => undefined);
        let batches = [];
        try {
            for (var _b = __asyncValues(batchNodes({}, undefined)), _c; _c = await _b.next(), !_c.done;) {
                let batch = _c.value;
                batches.push(batch);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        expect(batches).toMatchSnapshot();
    });
});
//# sourceMappingURL=util.test.js.map