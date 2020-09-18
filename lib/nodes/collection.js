"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCollectionNode = exports.createCollectionNode = void 0;
const create_node_helpers_1 = __importDefault(require("../create-node-helpers"));
const constants_1 = require("../constants");
const { createNodeFactory, generateNodeId } = create_node_helpers_1.default({
    typePrefix: constants_1.TYPE_PREFIX,
});
const CollectionNode = createNodeFactory(constants_1.NodeType.COLLECTION, async (node) => {
    if (node.products) {
        node.products___NODE = node.products.edges.map((edge) => generateNodeId(constants_1.NodeType.PRODUCT, edge.node.id));
        delete node.products;
    }
    return node;
});
async function createCollectionNode(collection, actions) {
    const { createNode } = actions;
    await CollectionNode(collection).then(createNode);
}
exports.createCollectionNode = createCollectionNode;
async function deleteCollectionNode(storefrontId, actions) {
    const { getNode, deleteNode } = actions;
    const collectionNode = getNode(generateNodeId(constants_1.NodeType.COLLECTION, storefrontId));
    if (collectionNode) {
        deleteNode({
            node: collectionNode,
        });
    }
}
exports.deleteCollectionNode = deleteCollectionNode;
//# sourceMappingURL=collection.js.map