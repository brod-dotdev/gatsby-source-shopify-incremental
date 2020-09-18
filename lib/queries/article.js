"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAllStorefrontArticles = exports.articlesQuery = void 0;
const util_1 = require("./util");
const fragments_1 = require("../fragments");
function articlesQuery(version) {
    return /* GraphQL */ `
    ${fragments_1.articleFragment(version)}
    query LoadArticles($first: Int!, $after: String) {
      articles(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            ...ArticleNode
          }
        }
      }
    }
  `;
}
exports.articlesQuery = articlesQuery;
async function fetchStorefrontArticles(client, variables, page) {
    const data = await client.storefront(`articles-${page}`, articlesQuery(client.version), variables);
    return data.articles;
}
exports.loadAllStorefrontArticles = util_1.fetchAllNodesFactory(fetchStorefrontArticles);
//# sourceMappingURL=article.js.map