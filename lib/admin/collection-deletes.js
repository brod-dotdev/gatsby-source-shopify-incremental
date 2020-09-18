"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCollectionDeletes = void 0;
const util_1 = require("./util");
// TODO merge with product deletes query
const COLLECTION_DELETES_QUERY = /* GraphQL */ `
  query CollectionDeletes($first: Int!, $after: String, $query: String) {
    deletionEvents(
      first: $first
      after: $after
      query: $query
      subjectTypes: [COLLECTION]
      sortKey: CREATED_AT
      reverse: true
    ) {
      edges {
        cursor
        node {
          occurredAt
          subjectId
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
async function fetchAdminCollectionDeletes(client, variables) {
    const { data } = (await client.admin({
        url: '/graphql.json',
        method: 'post',
        data: {
            query: COLLECTION_DELETES_QUERY,
            variables,
        },
    }));
    return data.data.deletionEvents;
}
function con(node, since) {
    return new Date(node.occurredAt) > since;
}
function vars(since) {
    const hourSlug = since.toISOString().substring(0, 13);
    const query = `occurred_at:>${hourSlug}`;
    return {
        query,
    };
}
/**
 * Generates collection deletes in batches of 50
 */
exports.adminCollectionDeletes = util_1.batchAllNodesFactory(fetchAdminCollectionDeletes, con, vars);
//# sourceMappingURL=collection-deletes.js.map