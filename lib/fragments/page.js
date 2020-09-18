"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageFragment = void 0;
function pageFragment(version) {
    return /* GraphQL */ `
    fragment PageNode on Page {
      id
      handle
      title
      body
      bodySummary
      updatedAt
      createdAt
      url
    }
  `;
}
exports.pageFragment = pageFragment;
//# sourceMappingURL=page.js.map