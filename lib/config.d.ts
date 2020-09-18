import { ApiVersion } from './types';
/**
 * Inernal populated config
 */
export interface PluginConfig {
    /**
     * The *.myshopify.com domain of your Shopify store
     * @example my-shop.myshopify.com
     */
    myshopifyDomain: string;
    /**
     * A valid admin access token for your Shopify store
     * It must be created by the same sales channel as the
     * storefrontAccessToken
     * Required scopes read_products
     */
    adminAccessToken: string;
    /**
     * A valid storefront access token for your Shopify store
     * It must be created by the same sales channel as the
     * adminAccessToken
     */
    storefrontAccessToken: string;
    /**
     * If your storefront domain is not the default
     * *.myshopify domain
     * @example my-shop.com
     */
    storefrontShopDomain: string;
    /**
     * Shopify api version to use
     */
    apiVersion: ApiVersion;
    /**
     * Import Shopify collections
     */
    includeCollections: boolean;
    /**
     * Import Shopify pages
     */
    includePages: boolean;
    /**
     * Import Shopify blogs
     */
    includeBlogs: boolean;
    /**
     * Indicate if you are Shopify plus
     * This will change the rate limits
     */
    shopifyPlus: boolean;
}
export declare function parseConfig(input: unknown): PluginConfig;
