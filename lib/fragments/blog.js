"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogFragment = void 0;
function blogFragment(version) {
    return /* GraphQL */ `
    fragment BlogNode on Blog {
      id
      title
      handle
      url
      # TODO add ArticleAuthors nodes
    }
  `;
}
exports.blogFragment = blogFragment;
//# sourceMappingURL=blog.js.map