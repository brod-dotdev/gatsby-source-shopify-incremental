"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCollectionUpdates = void 0;
const util_1 = require("./util");
const COLLECTION_UPDATES_QUERY = /* GraphQL */ `
  query CollectionUpdates($first: Int!, $after: String, $query: String) {
    collections(
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
async function fetchAdminCollectionUpdates(client, variables) {
    const { data } = (await client.admin({
        url: '/graphql.json',
        method: 'post',
        data: {
            query: COLLECTION_UPDATES_QUERY,
            variables,
        },
    }));
    return data.data.collections;
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
exports.adminCollectionUpdates = util_1.batchAllNodesFactory(fetchAdminCollectionUpdates, con, vars);
//# sourceMappingURL=collection-updates.js.map