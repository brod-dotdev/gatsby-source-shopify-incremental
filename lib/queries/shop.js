"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStorefrontShop = exports.SHOP_POLICIES_QUERY = void 0;
exports.SHOP_POLICIES_QUERY = `
  query LoadShop {
    shop {
      privacyPolicy {
        body
        id
        title
        url
      }
      refundPolicy {
        body
        id
        title
        url
      }
      termsOfService {
        body
        id
        title
        url
      }
    }
  }
`;
async function fetchStorefrontShop(client) {
    const data = await client.storefront('shop', exports.SHOP_POLICIES_QUERY);
    return data.shop;
}
exports.fetchStorefrontShop = fetchStorefrontShop;
//# sourceMappingURL=shop.js.map