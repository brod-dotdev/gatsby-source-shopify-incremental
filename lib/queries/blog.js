"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAllStorefrontBlogs = exports.blogsQuery = void 0;
const util_1 = require("./util");
const fragments_1 = require("../fragments");
function blogsQuery(version) {
    return /* GraphQL */ `
    ${fragments_1.blogFragment(version)}
    query LoadBlogs($first: Int!, $after: String) {
      blogs(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...BlogNode
          }
        }
      }
    }
  `;
}
exports.blogsQuery = blogsQuery;
async function fetchStorefrontBlogs(client, variables, page) {
    const data = await client.storefront(`blogs-${page}`, blogsQuery(client.version), variables);
    return data.blogs;
}
exports.loadAllStorefrontBlogs = util_1.fetchAllNodesFactory(fetchStorefrontBlogs);
//# sourceMappingURL=blog.js.map