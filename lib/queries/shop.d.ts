import { Client } from '../client';
export declare const SHOP_POLICIES_QUERY = "\n  query LoadShop {\n    shop {\n      privacyPolicy {\n        body\n        id\n        title\n        url\n      }\n      refundPolicy {\n        body\n        id\n        title\n        url\n      }\n      termsOfService {\n        body\n        id\n        title\n        url\n      }\n    }\n  }\n";
export declare function fetchStorefrontShop(client: Client): Promise<{
    privacyPolicy?: Pick<import("./types").ShopPolicy, "body" | "title" | "url" | "id"> | null | undefined;
    refundPolicy?: Pick<import("./types").ShopPolicy, "body" | "title" | "url" | "id"> | null | undefined;
    termsOfService?: Pick<import("./types").ShopPolicy, "body" | "title" | "url" | "id"> | null | undefined;
}>;
