"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStorefrontCollectionsByIds = exports.loadAllStorefrontCollections = void 0;
const fragments_1 = require("../fragments");
const util_1 = require("./util");
function collectionsQuery(version) {
    return /* GraphQL */ `
    ${fragments_1.collectionFragment(version)}
    query LoadCollections($first: Int!, $after: String) {
      collections(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...CollectionNode
          }
        }
      }
    }
  `;
}
async function fetchStorefrontCollections(client, variables, page) {
    const data = await client.storefront(`collections-${page}`, collectionsQuery(client.version), variables);
    return data.collections;
}
exports.loadAllStorefrontCollections = util_1.fetchAllNodesFactory(fetchStorefrontCollections);
function collectionsByIdsQuery(version) {
    return /* GraphQL */ `
    ${fragments_1.collectionFragment(version)}
    query LoadCollectionsByIds($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on Collection {
          ...CollectionNode
        }
      }
    }
  `;
}
async function fetchStorefrontCollectionsByIds(client, ids) {
    const variables = { ids };
    const data = await client.storefront('collections-by-ids', collectionsByIdsQuery(client.version), variables);
    return data.nodes;
}
exports.fetchStorefrontCollectionsByIds = fetchStorefrontCollectionsByIds;
//# sourceMappingURL=collection.js.map