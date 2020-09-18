"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheKey = void 0;
function getCacheKey(config, type) {
    return `${config.myshopifyDomain}${type}`;
}
exports.getCacheKey = getCacheKey;
//# sourceMappingURL=cache.js.map