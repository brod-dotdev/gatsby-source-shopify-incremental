"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPageNode = exports.PageNode = exports.createBlogNode = exports.BlogNode = exports.createArticleNode = exports.ArticleNode = exports.ShopPolicyNode = void 0;
const constants_1 = require("../constants");
const create_node_helpers_1 = __importDefault(require("../create-node-helpers"));
__exportStar(require("./product"), exports);
__exportStar(require("./collection"), exports);
// These nodes are ported right from
// gatsby-source-shopify right now
// I plan to make them incremental
// soon but have decided they are
// less important for now
const { createNodeFactory, generateNodeId } = create_node_helpers_1.default({
    typePrefix: constants_1.TYPE_PREFIX,
});
exports.ShopPolicyNode = createNodeFactory(constants_1.NodeType.SHOP_POLICY);
exports.ArticleNode = createNodeFactory(constants_1.NodeType.ARTICLE, async (node) => {
    if (node.blog) {
        node.blog___NODE = generateNodeId(constants_1.NodeType.BLOG, node.blog.id);
        delete node.blog;
    }
    return node;
});
async function createArticleNode(page, actions) {
    const { createNode } = actions;
    await exports.ArticleNode(page).then(createNode);
}
exports.createArticleNode = createArticleNode;
exports.BlogNode = createNodeFactory(constants_1.NodeType.BLOG);
async function createBlogNode(page, actions) {
    const { createNode } = actions;
    await exports.BlogNode(page).then(createNode);
}
exports.createBlogNode = createBlogNode;
exports.PageNode = createNodeFactory(constants_1.NodeType.PAGE);
async function createPageNode(page, actions) {
    const { createNode } = actions;
    await exports.PageNode(page).then(createNode);
}
exports.createPageNode = createPageNode;
//# sourceMappingURL=index.js.map