"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAllStorefrontPages = exports.pagesQuery = void 0;
const util_1 = require("./util");
const fragments_1 = require("../fragments");
function pagesQuery(version) {
    return /* GraphQL */ `
    ${fragments_1.pageFragment(version)}
    query LoadPages($first: Int!, $after: String) {
      pages(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...PageNode
          }
        }
      }
    }
  `;
}
exports.pagesQuery = pagesQuery;
async function fetchStorefrontPages(client, variables, page) {
    const data = await client.storefront(`pages-${page}`, pagesQuery(client.version), variables);
    return data.pages;
}
exports.loadAllStorefrontPages = util_1.fetchAllNodesFactory(fetchStorefrontPages);
//# sourceMappingURL=page.js.map