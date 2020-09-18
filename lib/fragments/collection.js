"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionFragment = void 0;
function collectionFragment(version) {
    return /* GraphQL */ `
    fragment CollectionNode on Collection {
      description
      descriptionHtml
      handle
      id
      image {
        altText
        id
        src
        originalSrc
      }
      # TODO load more than 250 products...
      products(first: 250) {
        edges {
          node {
            id
          }
        }
      }
      title
      updatedAt
    }
  `;
}
exports.collectionFragment = collectionFragment;
//# sourceMappingURL=collection.js.map