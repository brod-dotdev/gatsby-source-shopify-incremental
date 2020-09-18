"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleFragment = void 0;
function articleFragment(version) {
    return /* GraphQL */ `
    fragment ArticleNode on Article {
      author {
        bio
        email
        firstName
        lastName
        name
      }
      authorV2 {
        bio
        email
        firstName
        lastName
        name
      }
      blog {
        id
      }
      content
      contentHtml
      excerpt
      excerptHtml
      id
      image {
        altText
        id
        src
        originalSrc
      }
      publishedAt
      tags
      title
      handle
      url
      seo {
        title
        description
      }
    }
  `;
}
exports.articleFragment = articleFragment;
//# sourceMappingURL=article.js.map