"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminProductDeletes = void 0;
const util_1 = require("./util");
const PRODUCT_DELETES_QUERY = /* GraphQL */ `
  query ProductDeletes($first: Int!, $after: String, $query: String) {
    deletionEvents(
      first: $first
      after: $after
      query: $query
      subjectTypes: [PRODUCT]
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
async function fetchAdminProductDeletes(client, variables) {
    const { data } = (await client.admin({
        url: '/graphql.json',
        method: 'post',
        data: {
            query: PRODUCT_DELETES_QUERY,
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
 * Generates product deletes in batches of 50
 */
exports.adminProductDeletes = util_1.batchAllNodesFactory(fetchAdminProductDeletes, con, vars);
//# sourceMappingURL=product-deletes.js.map