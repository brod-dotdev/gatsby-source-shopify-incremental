"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertProductNode = exports.deleteProductNode = exports.createProductNode = void 0;
const create_node_helpers_1 = __importDefault(require("../create-node-helpers"));
const constants_1 = require("../constants");
// TODO look into baking relationships into node helpers in
// some way. Should be able to have crud functions generated
// Maybe automate the touchnode as well?
const { createNodeFactory, generateNodeId } = create_node_helpers_1.default({
    typePrefix: constants_1.TYPE_PREFIX,
});
const ProductNode = createNodeFactory(constants_1.NodeType.PRODUCT, async (node) => {
    // TODO handle relationship based deletions here
    if (node.variants) {
        const variants = node.variants.edges.map((edge) => edge.node);
        node.variants___NODE = variants.map((variant) => generateNodeId(constants_1.NodeType.PRODUCT_VARIANT, variant.id));
        delete node.variants;
    }
    if (node.metafields) {
        const metafields = node.metafields.edges.map((edge) => edge.node);
        node.metafields___NODE = metafields.map((metafield) => generateNodeId(constants_1.NodeType.PRODUCT_METAFIELD, metafield.id));
        delete node.metafields;
    }
    return node;
});
const ProductMetafieldNode = createNodeFactory(constants_1.NodeType.PRODUCT_METAFIELD, async (node, productId) => {
    node.product___NODE = generateNodeId(constants_1.NodeType.PRODUCT, productId);
    return node;
});
const ProductVariantNode = createNodeFactory(constants_1.NodeType.PRODUCT_VARIANT, async (node, productId) => {
    if (node.metafields) {
        const metafields = node.metafields.edges.map((edge) => edge.node);
        node.metafields___NODE = metafields.map((metafield) => generateNodeId(constants_1.NodeType.PRODUCT_VARIANT_METAFIELD, metafield.id));
        delete node.metafields;
    }
    node.product___NODE = generateNodeId(constants_1.NodeType.PRODUCT, productId);
    return node;
});
const ProductVariantMetafieldNode = createNodeFactory(constants_1.NodeType.PRODUCT_VARIANT_METAFIELD, async (node, variantId) => {
    node.variant___NODE = generateNodeId(constants_1.NodeType.PRODUCT_VARIANT, variantId);
    return node;
});
async function createProductNode(product, actions) {
    const { createNode } = actions;
    // Create all metafield nodes
    await Promise.all(product.metafields.edges
        .map((edge) => ProductMetafieldNode(edge.node, product.id))
        .map((p) => p.then(createNode)));
    await Promise.all(product.variants.edges.map(async (edge) => {
        await Promise.all(edge.node.metafields.edges
            .map((edge) => ProductVariantMetafieldNode(edge.node, edge.node.id))
            .map((p) => p.then(createNode)));
        return ProductVariantNode(edge.node, product.id).then(createNode);
    }));
    await ProductNode(product).then(createNode);
}
exports.createProductNode = createProductNode;
async function deleteProductNode(storefrontId, actions) {
    const { getNode, deleteNode } = actions;
    const productNode = getNode(generateNodeId(constants_1.NodeType.PRODUCT, storefrontId));
    // TODO clean this section up. Do it in node factories?
    if (productNode) {
        if (Array.isArray(productNode.metafields___NODE)) {
            productNode.metafields___NODE.forEach((id) => {
                const node = getNode(id);
                if (node) {
                    deleteNode({
                        node,
                    });
                }
            });
        }
        if (Array.isArray(productNode.variants___NODE)) {
            productNode.variants___NODE.forEach((id) => {
                const variantNode = getNode(id);
                if (variantNode) {
                    if (Array.isArray(variantNode.metafields___NODE)) {
                        variantNode.metafields___NODE.forEach((id) => {
                            const node = getNode(id);
                            if (node) {
                                deleteNode({
                                    node,
                                });
                            }
                        });
                    }
                    deleteNode({
                        node: variantNode,
                    });
                }
            });
        }
        deleteNode({
            node: productNode,
        });
    }
}
exports.deleteProductNode = deleteProductNode;
async function upsertProductNode(event, actions) {
    await deleteProductNode(event.storefrontId, actions);
    await createProductNode(event.node, actions);
}
exports.upsertProductNode = upsertProductNode;
//# sourceMappingURL=product.js.map