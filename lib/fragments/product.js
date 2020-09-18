"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFragment = void 0;
const metafield_1 = require("./metafield");
function productVariantFragment(version) {
    return /* GraphQL */ `
    ${metafield_1.metafieldFragment(version)}
    fragment ProductVariantNode on ProductVariant {
      availableForSale
      compareAtPrice
      compareAtPriceV2 {
        amount
        currencyCode
      }
      id
      image {
        altText
        id
        originalSrc
      }
      price
      priceV2 {
        amount
        currencyCode
      }
      requiresShipping
      selectedOptions {
        name
        value
      }
      sku
      title
      weight
      weightUnit
      metafields(first: 250) {
        edges {
          node {
            # Included in variant fragment
            ...MetafieldNode
          }
        }
      }
      presentmentPrices(first: 250) {
        edges {
          node {
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
      presentmentUnitPrices(first: 250) {
        edges {
          node {
            amount
            currencyCode
          }
        }
      }
      unitPrice {
        amount
        currencyCode
      }
      unitPriceMeasurement {
        measuredType
        quantityUnit
        quantityValue
        referenceUnit
        referenceValue
      }
      weight
      weightUnit
    }
  `;
}
function productFragment(version) {
    return /* GraphQL */ `
    ${productVariantFragment(version)}
    fragment ProductNode on Product {
      availableForSale
      createdAt
      description
      descriptionHtml
      handle
      id
      images(first: 250) {
        edges {
          node {
            id
            altText
            originalSrc
          }
        }
      }
      metafields(first: 250) {
        edges {
          node {
            # Included in variant fragment
            ...MetafieldNode
          }
        }
      }
      media(first: 250) {
        edges {
          node {
            alt
            mediaContentType
            previewImage {
              altText
              id
              originalSrc
            }
          }
        }
      }
      onlineStoreUrl
      options {
        id
        name
        values
      }
      presentmentPriceRanges(first: 250) {
        edges {
          node {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      productType
      publishedAt
      tags
      title
      updatedAt
      variants(first: 250) {
        edges {
          node {
            ...ProductVariantNode
          }
        }
      }
      vendor
    }
  `;
}
exports.productFragment = productFragment;
//# sourceMappingURL=product.js.map