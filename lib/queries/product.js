"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStorefrontProductsByIds = exports.loadAllStorefrontProducts = void 0;
const fragments_1 = require("../fragments");
const util_1 = require("./util");
function productsQuery(version) {
    return /* GraphQL */ `
    ${fragments_1.productFragment(version)}
    query LoadProducts($first: Int!, $after: String) {
      products(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...ProductNode
          }
        }
      }
    }
  `;
}
async function fetchStorefrontProducts(client, variables, page) {
    const data = await client.storefront(`products-${page}`, productsQuery(client.version), variables);
    return data.products;
}
exports.loadAllStorefrontProducts = util_1.fetchAllNodesFactory(fetchStorefrontProducts);
function productsByIdsQuery(version) {
    return /* GraphQL */ `
    ${fragments_1.productFragment(version)}
    query LoadProductsByIds($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on Product {
          ...ProductNode
        }
      }
    }
  `;
}
async function fetchStorefrontProductsByIds(client, ids) {
    const variables = { ids };
    const data = await client.storefront('products-by-ids', productsByIdsQuery(client.version), variables);
    return data.nodes;
}
exports.fetchStorefrontProductsByIds = fetchStorefrontProductsByIds;
//# sourceMappingURL=product.js.map