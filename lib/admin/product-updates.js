"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminProductUpdates = void 0;
const util_1 = require("./util");
const PRODUCT_UPDATES_QUERY = /* GraphQL */ `
  query ProductUpdates($first: Int!, $after: String, $query: String) {
    products(
      first: $first
      after: $after
      query: $query
      sortKey: UPDATED_AT
      reverse: true
    ) {
      edges {
        cursor
        node {
          id
          storefrontId
          published: publishedOnCurrentPublication
          updatedAt
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
async function fetchAdminProductUpdates(client, variables) {
    const { data } = (await client.admin({
        url: '/graphql.json',
        method: 'post',
        data: {
            query: PRODUCT_UPDATES_QUERY,
            variables,
        },
    }));
    return data.data.products;
}
function con(node, since) {
    return new Date(node.updatedAt) > since;
}
function vars(since) {
    const hourSlug = since.toISOString().substring(0, 13);
    const query = `updated_at:>${hourSlug}`;
    return {
        query,
    };
}
/**
 * Generates product updates in batches of 50
 */
exports.adminProductUpdates = util_1.batchAllNodesFactory(fetchAdminProductUpdates, con, vars);
//# sourceMappingURL=product-updates.js.map