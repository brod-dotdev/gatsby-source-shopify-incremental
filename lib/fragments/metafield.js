"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metafieldFragment = void 0;
function metafieldFragment(version) {
    return /* GraphQL */ `
    fragment MetafieldNode on Metafield {
      description
      id
      key
      namespace
      value
      valueType
      createdAt
      updatedAt
    }
  `;
}
exports.metafieldFragment = metafieldFragment;
//# sourceMappingURL=metafield.js.map