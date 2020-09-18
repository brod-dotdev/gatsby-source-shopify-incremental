"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightUnit = exports.WebhookSubscriptionTopic = exports.WebhookSubscriptionSortKeys = exports.WebhookSubscriptionFormat = exports.UnitSystem = exports.TranslationErrorCode = exports.TranslatableResourceType = exports.TaxExemption = exports.SuggestedOrderTransactionKind = exports.StagedUploadTargetGenerateUploadResource = exports.StagedUploadHttpMethodType = exports.ShopTagSort = exports.ShopImageSortKeys = exports.ShopifyPaymentsVerificationStatus = exports.ShopifyPaymentsVerificationDocumentType = exports.ShopifyPaymentsPayoutTransactionType = exports.ShopifyPaymentsPayoutStatus = exports.ShopifyPaymentsPayoutInterval = exports.ShopifyPaymentsDisputeReason = exports.ShopifyPaymentsBankAccountStatus = exports.ShopCustomerAccountsSetting = exports.ShopBranding = exports.SearchResultType = exports.ScriptTagDisplayScope = exports.ResourceAlertSeverity = exports.ResourceAlertIcon = exports.RefundLineItemRestockType = exports.RefundLineItemRefundType = exports.RefundDutyRefundType = exports.ProfileItemSortKeys = exports.ProductVariantSortKeys = exports.ProductVariantInventoryPolicy = exports.ProductVariantInventoryManagement = exports.ProductSortKeys = exports.ProductMediaSortKeys = exports.ProductImageSortKeys = exports.ProductCollectionSortKeys = exports.PrivateMetafieldValueType = exports.PriceRuleTrait = exports.PriceRuleTarget = exports.PriceRuleStatus = exports.PriceRuleSortKeys = exports.PriceRuleShareableUrlTargetType = exports.PriceRuleFeature = exports.PriceRuleErrorCode = exports.PriceRuleAllocationMethod = exports.PaymentMethods = exports.OrderTransactionStatus = exports.OrderTransactionKind = exports.OrderTransactionErrorCode = exports.OrderSortKeys = exports.OrderRiskLevel = exports.OrderDisplayFulfillmentStatus = exports.OrderDisplayFinancialStatus = exports.OrderCancelReason = exports.MethodDefinitionSortKeys = exports.MetafieldValueType = exports.MetafieldOwnerType = exports.MediaUserErrorCode = exports.MediaStatus = exports.MediaPreviewImageStatus = exports.MediaErrorCode = exports.MediaContentType = exports.MarketingTactic = exports.MarketingEventSortKeys = exports.MarketingChannel = exports.MarketingBudgetBudgetType = exports.MarketingActivityStatus = exports.MarketingActivitySortKeys = exports.MarketingActivityExtensionAppErrorCode = exports.LocationSortKeys = exports.KitSkillLocale = exports.ImageContentType = exports.FulfillmentStatus = exports.FulfillmentServiceType = exports.FulfillmentOrderStatus = exports.FulfillmentOrderSortKeys = exports.FulfillmentOrderRequestStatus = exports.FulfillmentOrderMerchantRequestKind = exports.FulfillmentOrderAssignmentStatus = exports.FulfillmentOrderAction = exports.FulfillmentEventStatus = exports.FulfillmentEventSortKeys = exports.FulfillmentDisplayStatus = exports.EventSortKeys = exports.DraftOrderStatus = exports.DraftOrderSortKeys = exports.DraftOrderAppliedDiscountType = exports.DisputeType = exports.DisputeStatus = exports.DiscountStatus = exports.DiscountErrorCode = exports.DiscountCodeSortKeys = exports.DiscountApplicationTargetType = exports.DiscountApplicationTargetSelection = exports.DiscountApplicationAllocationMethod = exports.DigitalWallet = exports.DeliveryMethodDefinitionType = exports.DeliveryLegacyModeBlockedReason = exports.DeliveryConditionOperator = exports.DeliveryConditionField = exports.DeletionEventSubjectType = exports.DeletionEventSortKeys = exports.DayOfTheWeek = exports.CustomerState = exports.CustomerSortKeys = exports.CustomerSavedSearchSortKeys = exports.CustomerMarketingOptInLevel = exports.CurrencyCode = exports.CropRegion = exports.CountryCode = exports.CollectionSortOrder = exports.CollectionSortKeys = exports.CollectionRuleRelation = exports.CollectionRuleColumn = exports.CodeDiscountSortKeys = exports.BulkOperationStatus = exports.BulkOperationErrorCode = exports.AutomaticDiscountSortKeys = exports.AppUsageRecordSortKeys = exports.AppTransactionSortKeys = exports.AppSubscriptionStatus = exports.AppSubscriptionSortKeys = exports.AppsSortKeys = exports.AppPurchaseStatus = exports.AppPricingInterval = exports.AppInstallationSortKeys = exports.AppInstallationPrivacy = exports.AppInstallationCategory = void 0;
/** Possible categories of an app installation. */
var AppInstallationCategory;
(function (AppInstallationCategory) {
    /** Sales channel apps. */
    AppInstallationCategory["Channel"] = "CHANNEL";
    /** Apps that can be used in the POS mobile client. */
    AppInstallationCategory["PosEmbedded"] = "POS_EMBEDDED";
})(AppInstallationCategory = exports.AppInstallationCategory || (exports.AppInstallationCategory = {}));
/** Possible privacy types of an app installation. */
var AppInstallationPrivacy;
(function (AppInstallationPrivacy) {
    AppInstallationPrivacy["Public"] = "PUBLIC";
    AppInstallationPrivacy["Private"] = "PRIVATE";
})(AppInstallationPrivacy = exports.AppInstallationPrivacy || (exports.AppInstallationPrivacy = {}));
/** The set of valid sort keys for the AppInstallation query. */
var AppInstallationSortKeys;
(function (AppInstallationSortKeys) {
    /** Sort by the `installed_at` value. */
    AppInstallationSortKeys["InstalledAt"] = "INSTALLED_AT";
    /** Sort by the `app_title` value. */
    AppInstallationSortKeys["AppTitle"] = "APP_TITLE";
    /** Sort by the `id` value. */
    AppInstallationSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    AppInstallationSortKeys["Relevance"] = "RELEVANCE";
})(AppInstallationSortKeys = exports.AppInstallationSortKeys || (exports.AppInstallationSortKeys = {}));
/** Interval for which pricing details are applied. */
var AppPricingInterval;
(function (AppPricingInterval) {
    /** App plan pricing details are applied every 30 days. */
    AppPricingInterval["Every_30Days"] = "EVERY_30_DAYS";
})(AppPricingInterval = exports.AppPricingInterval || (exports.AppPricingInterval = {}));
/** The status of the purchase. */
var AppPurchaseStatus;
(function (AppPurchaseStatus) {
    /**
     * The app purchase has been approved by the merchant and is ready to be
     * activated by the app. App purchases created through the GraphQL Admin API are
     * activated upon approval.
     */
    AppPurchaseStatus["Accepted"] = "ACCEPTED";
    /**
     * The app purchase has been activated by the app. Active app purchases are
     * charged to the store and partners receive payouts for active app purchase.
     */
    AppPurchaseStatus["Active"] = "ACTIVE";
    /** The app purchase was declined by the merchant. */
    AppPurchaseStatus["Declined"] = "DECLINED";
    /** The app purchase was not accepted within 2 days of being created. */
    AppPurchaseStatus["Expired"] = "EXPIRED";
    /** The app purchase is pending approval by the merchant. */
    AppPurchaseStatus["Pending"] = "PENDING";
})(AppPurchaseStatus = exports.AppPurchaseStatus || (exports.AppPurchaseStatus = {}));
/** The set of valid sort keys for the Apps query. */
var AppsSortKeys;
(function (AppsSortKeys) {
    /** Sort by the `title` value. */
    AppsSortKeys["Title"] = "TITLE";
    /** Sort by the `id` value. */
    AppsSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    AppsSortKeys["Relevance"] = "RELEVANCE";
})(AppsSortKeys = exports.AppsSortKeys || (exports.AppsSortKeys = {}));
/** The set of valid sort keys for the AppSubscription query. */
var AppSubscriptionSortKeys;
(function (AppSubscriptionSortKeys) {
    /** Sort by the `created_at` value. */
    AppSubscriptionSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AppSubscriptionSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    AppSubscriptionSortKeys["Relevance"] = "RELEVANCE";
})(AppSubscriptionSortKeys = exports.AppSubscriptionSortKeys || (exports.AppSubscriptionSortKeys = {}));
/** The status of the app subscription. */
var AppSubscriptionStatus;
(function (AppSubscriptionStatus) {
    /** The app subscription is pending approval by the merchant. */
    AppSubscriptionStatus["Pending"] = "PENDING";
    /**
     * The app subscription has been approved by the merchant and is ready to be
     * activated by the app. App subscriptions created through the GraphQL Admin API
     * are activated upon approval.
     */
    AppSubscriptionStatus["Accepted"] = "ACCEPTED";
    /**
     * The app subscription has been activated by the app. Active app subscriptions
     * are charged to the store and partners recieve payouts for active app subscriptions.
     */
    AppSubscriptionStatus["Active"] = "ACTIVE";
    /** The app subscription was declined by the merchant. */
    AppSubscriptionStatus["Declined"] = "DECLINED";
    /** The app subscription was not accepted within 2 days of being created. */
    AppSubscriptionStatus["Expired"] = "EXPIRED";
    /**
     * The app subscription is on hold due to a store subscription non-payment. The
     * charge will re-activate once subscription payments resume.
     */
    AppSubscriptionStatus["Frozen"] = "FROZEN";
    /** The app subscription was cancelled by the app. */
    AppSubscriptionStatus["Cancelled"] = "CANCELLED";
})(AppSubscriptionStatus = exports.AppSubscriptionStatus || (exports.AppSubscriptionStatus = {}));
/** The set of valid sort keys for the AppTransaction query. */
var AppTransactionSortKeys;
(function (AppTransactionSortKeys) {
    /** Sort by the `created_at` value. */
    AppTransactionSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AppTransactionSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    AppTransactionSortKeys["Relevance"] = "RELEVANCE";
})(AppTransactionSortKeys = exports.AppTransactionSortKeys || (exports.AppTransactionSortKeys = {}));
/** The set of valid sort keys for the AppUsageRecord query. */
var AppUsageRecordSortKeys;
(function (AppUsageRecordSortKeys) {
    /** Sort by the `created_at` value. */
    AppUsageRecordSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AppUsageRecordSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    AppUsageRecordSortKeys["Relevance"] = "RELEVANCE";
})(AppUsageRecordSortKeys = exports.AppUsageRecordSortKeys || (exports.AppUsageRecordSortKeys = {}));
/** The set of valid sort keys for the AutomaticDiscount query. */
var AutomaticDiscountSortKeys;
(function (AutomaticDiscountSortKeys) {
    /** Sort by the `created_at` value. */
    AutomaticDiscountSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    AutomaticDiscountSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    AutomaticDiscountSortKeys["Relevance"] = "RELEVANCE";
})(AutomaticDiscountSortKeys = exports.AutomaticDiscountSortKeys || (exports.AutomaticDiscountSortKeys = {}));
/** Error codes for failed bulk operations. */
var BulkOperationErrorCode;
(function (BulkOperationErrorCode) {
    /**
     * The provided operation `query` returned access denied due to missing
     * [access scopes](https://help.shopify.com/api/getting-started/authentication/oauth/scopes).
     * Review the requested object permissions and execute the query as a normal non-bulk GraphQL request to see more details.
     */
    BulkOperationErrorCode["AccessDenied"] = "ACCESS_DENIED";
    /** Operation resulted in partial or incomplete data due to internal server errors during execution. */
    BulkOperationErrorCode["InternalServerError"] = "INTERNAL_SERVER_ERROR";
    /**
     * Operation resulted in partial or incomplete data due to query timeouts during execution.
     * In some cases, timeouts can be avoided by modifying your `query` to select fewer fields.
     */
    BulkOperationErrorCode["Timeout"] = "TIMEOUT";
})(BulkOperationErrorCode = exports.BulkOperationErrorCode || (exports.BulkOperationErrorCode = {}));
/** Statuses of a bulk operation. */
var BulkOperationStatus;
(function (BulkOperationStatus) {
    /** Operation created. */
    BulkOperationStatus["Created"] = "CREATED";
    /** Operation running. */
    BulkOperationStatus["Running"] = "RUNNING";
    /** Operation completed. */
    BulkOperationStatus["Completed"] = "COMPLETED";
    /** Operation canceling. */
    BulkOperationStatus["Canceling"] = "CANCELING";
    /** Operation canceled. */
    BulkOperationStatus["Canceled"] = "CANCELED";
    /** Operation failed. */
    BulkOperationStatus["Failed"] = "FAILED";
    /** Operation URL has expired. */
    BulkOperationStatus["Expired"] = "EXPIRED";
})(BulkOperationStatus = exports.BulkOperationStatus || (exports.BulkOperationStatus = {}));
/** The set of valid sort keys for the CodeDiscount query. */
var CodeDiscountSortKeys;
(function (CodeDiscountSortKeys) {
    /** Sort by the `starts_at` value. */
    CodeDiscountSortKeys["StartsAt"] = "STARTS_AT";
    /** Sort by the `ends_at` value. */
    CodeDiscountSortKeys["EndsAt"] = "ENDS_AT";
    /** Sort by the `title` value. */
    CodeDiscountSortKeys["Title"] = "TITLE";
    /** Sort by the `created_at` value. */
    CodeDiscountSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `updated_at` value. */
    CodeDiscountSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `id` value. */
    CodeDiscountSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    CodeDiscountSortKeys["Relevance"] = "RELEVANCE";
})(CodeDiscountSortKeys = exports.CodeDiscountSortKeys || (exports.CodeDiscountSortKeys = {}));
/** Specifies the property of a product being used to populate the smart collection. */
var CollectionRuleColumn;
(function (CollectionRuleColumn) {
    /** The `tag` attribute. */
    CollectionRuleColumn["Tag"] = "TAG";
    /** The `title` attribute. */
    CollectionRuleColumn["Title"] = "TITLE";
    /** The `type` attribute. */
    CollectionRuleColumn["Type"] = "TYPE";
    /** The `vendor` attribute. */
    CollectionRuleColumn["Vendor"] = "VENDOR";
    /** The `variant_price` attribute. */
    CollectionRuleColumn["VariantPrice"] = "VARIANT_PRICE";
    /** The `is_price_reduced` attribute. */
    CollectionRuleColumn["IsPriceReduced"] = "IS_PRICE_REDUCED";
    /** The `variant_compare_at_price` attribute. */
    CollectionRuleColumn["VariantCompareAtPrice"] = "VARIANT_COMPARE_AT_PRICE";
    /** The `variant_weight` attribute. */
    CollectionRuleColumn["VariantWeight"] = "VARIANT_WEIGHT";
    /** The `variant_inventory` attribute. */
    CollectionRuleColumn["VariantInventory"] = "VARIANT_INVENTORY";
    /** The `variant_title` attribute. */
    CollectionRuleColumn["VariantTitle"] = "VARIANT_TITLE";
})(CollectionRuleColumn = exports.CollectionRuleColumn || (exports.CollectionRuleColumn = {}));
/** Specifies the relationship between the `column` and the condition. */
var CollectionRuleRelation;
(function (CollectionRuleRelation) {
    /** The attribute contains the condition. */
    CollectionRuleRelation["Contains"] = "CONTAINS";
    /** The attribute ends with the condition. */
    CollectionRuleRelation["EndsWith"] = "ENDS_WITH";
    /** The attribute is equal to the condition. */
    CollectionRuleRelation["Equals"] = "EQUALS";
    /** The attribute is greater than the condition. */
    CollectionRuleRelation["GreaterThan"] = "GREATER_THAN";
    /** The attribute is not set. */
    CollectionRuleRelation["IsNotSet"] = "IS_NOT_SET";
    /** The attribute is set. */
    CollectionRuleRelation["IsSet"] = "IS_SET";
    /** The attribute is less than the condition. */
    CollectionRuleRelation["LessThan"] = "LESS_THAN";
    /** The attribute does not contain the condition. */
    CollectionRuleRelation["NotContains"] = "NOT_CONTAINS";
    /** The attribute does not equal the condition. */
    CollectionRuleRelation["NotEquals"] = "NOT_EQUALS";
    /** The attribute starts with the condition. */
    CollectionRuleRelation["StartsWith"] = "STARTS_WITH";
})(CollectionRuleRelation = exports.CollectionRuleRelation || (exports.CollectionRuleRelation = {}));
/** The set of valid sort keys for the Collection query. */
var CollectionSortKeys;
(function (CollectionSortKeys) {
    /** Sort by the `title` value. */
    CollectionSortKeys["Title"] = "TITLE";
    /** Sort by the `updated_at` value. */
    CollectionSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `id` value. */
    CollectionSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    CollectionSortKeys["Relevance"] = "RELEVANCE";
})(CollectionSortKeys = exports.CollectionSortKeys || (exports.CollectionSortKeys = {}));
/** Specifies the sort order for the products in the collection. */
var CollectionSortOrder;
(function (CollectionSortOrder) {
    /** Alphabetically, in ascending order (A - Z). */
    CollectionSortOrder["AlphaAsc"] = "ALPHA_ASC";
    /** Alphabetically, in descending order (Z - A). */
    CollectionSortOrder["AlphaDesc"] = "ALPHA_DESC";
    /** By best-selling products. */
    CollectionSortOrder["BestSelling"] = "BEST_SELLING";
    /** By date created, in ascending order (oldest - newest). */
    CollectionSortOrder["Created"] = "CREATED";
    /** By date created, in descending order (newest - oldest). */
    CollectionSortOrder["CreatedDesc"] = "CREATED_DESC";
    /** In the order set manually by the merchant. */
    CollectionSortOrder["Manual"] = "MANUAL";
    /** By price, in ascending order (lowest - highest). */
    CollectionSortOrder["PriceAsc"] = "PRICE_ASC";
    /** By price, in descending order (highest - lowest). */
    CollectionSortOrder["PriceDesc"] = "PRICE_DESC";
})(CollectionSortOrder = exports.CollectionSortOrder || (exports.CollectionSortOrder = {}));
/** ISO 3166-1 alpha-2 country codes with some differences. */
var CountryCode;
(function (CountryCode) {
    /** Afghanistan. */
    CountryCode["Af"] = "AF";
    /** Aland Islands. */
    CountryCode["Ax"] = "AX";
    /** Albania. */
    CountryCode["Al"] = "AL";
    /** Algeria. */
    CountryCode["Dz"] = "DZ";
    /** Andorra. */
    CountryCode["Ad"] = "AD";
    /** Angola. */
    CountryCode["Ao"] = "AO";
    /** Anguilla. */
    CountryCode["Ai"] = "AI";
    /** Antigua And Barbuda. */
    CountryCode["Ag"] = "AG";
    /** Argentina. */
    CountryCode["Ar"] = "AR";
    /** Armenia. */
    CountryCode["Am"] = "AM";
    /** Aruba. */
    CountryCode["Aw"] = "AW";
    /** Australia. */
    CountryCode["Au"] = "AU";
    /** Austria. */
    CountryCode["At"] = "AT";
    /** Azerbaijan. */
    CountryCode["Az"] = "AZ";
    /** Bahamas. */
    CountryCode["Bs"] = "BS";
    /** Bahrain. */
    CountryCode["Bh"] = "BH";
    /** Bangladesh. */
    CountryCode["Bd"] = "BD";
    /** Barbados. */
    CountryCode["Bb"] = "BB";
    /** Belarus. */
    CountryCode["By"] = "BY";
    /** Belgium. */
    CountryCode["Be"] = "BE";
    /** Belize. */
    CountryCode["Bz"] = "BZ";
    /** Benin. */
    CountryCode["Bj"] = "BJ";
    /** Bermuda. */
    CountryCode["Bm"] = "BM";
    /** Bhutan. */
    CountryCode["Bt"] = "BT";
    /** Bolivia. */
    CountryCode["Bo"] = "BO";
    /** Bosnia And Herzegovina. */
    CountryCode["Ba"] = "BA";
    /** Botswana. */
    CountryCode["Bw"] = "BW";
    /** Bouvet Island. */
    CountryCode["Bv"] = "BV";
    /** Brazil. */
    CountryCode["Br"] = "BR";
    /** British Indian Ocean Territory. */
    CountryCode["Io"] = "IO";
    /** Brunei. */
    CountryCode["Bn"] = "BN";
    /** Bulgaria. */
    CountryCode["Bg"] = "BG";
    /** Burkina Faso. */
    CountryCode["Bf"] = "BF";
    /** Burundi. */
    CountryCode["Bi"] = "BI";
    /** Cambodia. */
    CountryCode["Kh"] = "KH";
    /** Canada. */
    CountryCode["Ca"] = "CA";
    /** Cape Verde. */
    CountryCode["Cv"] = "CV";
    /** Caribbean Netherlands. */
    CountryCode["Bq"] = "BQ";
    /** Cayman Islands. */
    CountryCode["Ky"] = "KY";
    /** Central African Republic. */
    CountryCode["Cf"] = "CF";
    /** Chad. */
    CountryCode["Td"] = "TD";
    /** Chile. */
    CountryCode["Cl"] = "CL";
    /** China. */
    CountryCode["Cn"] = "CN";
    /** Christmas Island. */
    CountryCode["Cx"] = "CX";
    /** Cocos (Keeling) Islands. */
    CountryCode["Cc"] = "CC";
    /** Colombia. */
    CountryCode["Co"] = "CO";
    /** Comoros. */
    CountryCode["Km"] = "KM";
    /** Congo. */
    CountryCode["Cg"] = "CG";
    /** Congo, The Democratic Republic Of The. */
    CountryCode["Cd"] = "CD";
    /** Cook Islands. */
    CountryCode["Ck"] = "CK";
    /** Costa Rica. */
    CountryCode["Cr"] = "CR";
    /** Croatia. */
    CountryCode["Hr"] = "HR";
    /** Cuba. */
    CountryCode["Cu"] = "CU";
    /** Curaçao. */
    CountryCode["Cw"] = "CW";
    /** Cyprus. */
    CountryCode["Cy"] = "CY";
    /** Czech Republic. */
    CountryCode["Cz"] = "CZ";
    /** Côte d'Ivoire. */
    CountryCode["Ci"] = "CI";
    /** Denmark. */
    CountryCode["Dk"] = "DK";
    /** Djibouti. */
    CountryCode["Dj"] = "DJ";
    /** Dominica. */
    CountryCode["Dm"] = "DM";
    /** Dominican Republic. */
    CountryCode["Do"] = "DO";
    /** Ecuador. */
    CountryCode["Ec"] = "EC";
    /** Egypt. */
    CountryCode["Eg"] = "EG";
    /** El Salvador. */
    CountryCode["Sv"] = "SV";
    /** Equatorial Guinea. */
    CountryCode["Gq"] = "GQ";
    /** Eritrea. */
    CountryCode["Er"] = "ER";
    /** Estonia. */
    CountryCode["Ee"] = "EE";
    /** Eswatini. */
    CountryCode["Sz"] = "SZ";
    /** Ethiopia. */
    CountryCode["Et"] = "ET";
    /** Falkland Islands (Malvinas). */
    CountryCode["Fk"] = "FK";
    /** Faroe Islands. */
    CountryCode["Fo"] = "FO";
    /** Fiji. */
    CountryCode["Fj"] = "FJ";
    /** Finland. */
    CountryCode["Fi"] = "FI";
    /** France. */
    CountryCode["Fr"] = "FR";
    /** French Guiana. */
    CountryCode["Gf"] = "GF";
    /** French Polynesia. */
    CountryCode["Pf"] = "PF";
    /** French Southern Territories. */
    CountryCode["Tf"] = "TF";
    /** Gabon. */
    CountryCode["Ga"] = "GA";
    /** Gambia. */
    CountryCode["Gm"] = "GM";
    /** Georgia. */
    CountryCode["Ge"] = "GE";
    /** Germany. */
    CountryCode["De"] = "DE";
    /** Ghana. */
    CountryCode["Gh"] = "GH";
    /** Gibraltar. */
    CountryCode["Gi"] = "GI";
    /** Greece. */
    CountryCode["Gr"] = "GR";
    /** Greenland. */
    CountryCode["Gl"] = "GL";
    /** Grenada. */
    CountryCode["Gd"] = "GD";
    /** Guadeloupe. */
    CountryCode["Gp"] = "GP";
    /** Guatemala. */
    CountryCode["Gt"] = "GT";
    /** Guernsey. */
    CountryCode["Gg"] = "GG";
    /** Guinea. */
    CountryCode["Gn"] = "GN";
    /** Guinea Bissau. */
    CountryCode["Gw"] = "GW";
    /** Guyana. */
    CountryCode["Gy"] = "GY";
    /** Haiti. */
    CountryCode["Ht"] = "HT";
    /** Heard Island And Mcdonald Islands. */
    CountryCode["Hm"] = "HM";
    /** Holy See (Vatican City State). */
    CountryCode["Va"] = "VA";
    /** Honduras. */
    CountryCode["Hn"] = "HN";
    /** Hong Kong. */
    CountryCode["Hk"] = "HK";
    /** Hungary. */
    CountryCode["Hu"] = "HU";
    /** Iceland. */
    CountryCode["Is"] = "IS";
    /** India. */
    CountryCode["In"] = "IN";
    /** Indonesia. */
    CountryCode["Id"] = "ID";
    /** Iran, Islamic Republic Of. */
    CountryCode["Ir"] = "IR";
    /** Iraq. */
    CountryCode["Iq"] = "IQ";
    /** Ireland. */
    CountryCode["Ie"] = "IE";
    /** Isle Of Man. */
    CountryCode["Im"] = "IM";
    /** Israel. */
    CountryCode["Il"] = "IL";
    /** Italy. */
    CountryCode["It"] = "IT";
    /** Jamaica. */
    CountryCode["Jm"] = "JM";
    /** Japan. */
    CountryCode["Jp"] = "JP";
    /** Jersey. */
    CountryCode["Je"] = "JE";
    /** Jordan. */
    CountryCode["Jo"] = "JO";
    /** Kazakhstan. */
    CountryCode["Kz"] = "KZ";
    /** Kenya. */
    CountryCode["Ke"] = "KE";
    /** Kiribati. */
    CountryCode["Ki"] = "KI";
    /** Korea, Democratic People's Republic Of. */
    CountryCode["Kp"] = "KP";
    /** Kosovo. */
    CountryCode["Xk"] = "XK";
    /** Kuwait. */
    CountryCode["Kw"] = "KW";
    /** Kyrgyzstan. */
    CountryCode["Kg"] = "KG";
    /** Lao People's Democratic Republic. */
    CountryCode["La"] = "LA";
    /** Latvia. */
    CountryCode["Lv"] = "LV";
    /** Lebanon. */
    CountryCode["Lb"] = "LB";
    /** Lesotho. */
    CountryCode["Ls"] = "LS";
    /** Liberia. */
    CountryCode["Lr"] = "LR";
    /** Libyan Arab Jamahiriya. */
    CountryCode["Ly"] = "LY";
    /** Liechtenstein. */
    CountryCode["Li"] = "LI";
    /** Lithuania. */
    CountryCode["Lt"] = "LT";
    /** Luxembourg. */
    CountryCode["Lu"] = "LU";
    /** Macao. */
    CountryCode["Mo"] = "MO";
    /** Madagascar. */
    CountryCode["Mg"] = "MG";
    /** Malawi. */
    CountryCode["Mw"] = "MW";
    /** Malaysia. */
    CountryCode["My"] = "MY";
    /** Maldives. */
    CountryCode["Mv"] = "MV";
    /** Mali. */
    CountryCode["Ml"] = "ML";
    /** Malta. */
    CountryCode["Mt"] = "MT";
    /** Martinique. */
    CountryCode["Mq"] = "MQ";
    /** Mauritania. */
    CountryCode["Mr"] = "MR";
    /** Mauritius. */
    CountryCode["Mu"] = "MU";
    /** Mayotte. */
    CountryCode["Yt"] = "YT";
    /** Mexico. */
    CountryCode["Mx"] = "MX";
    /** Moldova, Republic of. */
    CountryCode["Md"] = "MD";
    /** Monaco. */
    CountryCode["Mc"] = "MC";
    /** Mongolia. */
    CountryCode["Mn"] = "MN";
    /** Montenegro. */
    CountryCode["Me"] = "ME";
    /** Montserrat. */
    CountryCode["Ms"] = "MS";
    /** Morocco. */
    CountryCode["Ma"] = "MA";
    /** Mozambique. */
    CountryCode["Mz"] = "MZ";
    /** Myanmar. */
    CountryCode["Mm"] = "MM";
    /** Namibia. */
    CountryCode["Na"] = "NA";
    /** Nauru. */
    CountryCode["Nr"] = "NR";
    /** Nepal. */
    CountryCode["Np"] = "NP";
    /** Netherlands. */
    CountryCode["Nl"] = "NL";
    /** Netherlands Antilles. */
    CountryCode["An"] = "AN";
    /** New Caledonia. */
    CountryCode["Nc"] = "NC";
    /** New Zealand. */
    CountryCode["Nz"] = "NZ";
    /** Nicaragua. */
    CountryCode["Ni"] = "NI";
    /** Niger. */
    CountryCode["Ne"] = "NE";
    /** Nigeria. */
    CountryCode["Ng"] = "NG";
    /** Niue. */
    CountryCode["Nu"] = "NU";
    /** Norfolk Island. */
    CountryCode["Nf"] = "NF";
    /** North Macedonia. */
    CountryCode["Mk"] = "MK";
    /** Norway. */
    CountryCode["No"] = "NO";
    /** Oman. */
    CountryCode["Om"] = "OM";
    /** Pakistan. */
    CountryCode["Pk"] = "PK";
    /** Palestinian Territory, Occupied. */
    CountryCode["Ps"] = "PS";
    /** Panama. */
    CountryCode["Pa"] = "PA";
    /** Papua New Guinea. */
    CountryCode["Pg"] = "PG";
    /** Paraguay. */
    CountryCode["Py"] = "PY";
    /** Peru. */
    CountryCode["Pe"] = "PE";
    /** Philippines. */
    CountryCode["Ph"] = "PH";
    /** Pitcairn. */
    CountryCode["Pn"] = "PN";
    /** Poland. */
    CountryCode["Pl"] = "PL";
    /** Portugal. */
    CountryCode["Pt"] = "PT";
    /** Qatar. */
    CountryCode["Qa"] = "QA";
    /** Republic of Cameroon. */
    CountryCode["Cm"] = "CM";
    /** Reunion. */
    CountryCode["Re"] = "RE";
    /** Romania. */
    CountryCode["Ro"] = "RO";
    /** Russia. */
    CountryCode["Ru"] = "RU";
    /** Rwanda. */
    CountryCode["Rw"] = "RW";
    /** Saint Barthélemy. */
    CountryCode["Bl"] = "BL";
    /** Saint Helena. */
    CountryCode["Sh"] = "SH";
    /** Saint Kitts And Nevis. */
    CountryCode["Kn"] = "KN";
    /** Saint Lucia. */
    CountryCode["Lc"] = "LC";
    /** Saint Martin. */
    CountryCode["Mf"] = "MF";
    /** Saint Pierre And Miquelon. */
    CountryCode["Pm"] = "PM";
    /** Samoa. */
    CountryCode["Ws"] = "WS";
    /** San Marino. */
    CountryCode["Sm"] = "SM";
    /** Sao Tome And Principe. */
    CountryCode["St"] = "ST";
    /** Saudi Arabia. */
    CountryCode["Sa"] = "SA";
    /** Senegal. */
    CountryCode["Sn"] = "SN";
    /** Serbia. */
    CountryCode["Rs"] = "RS";
    /** Seychelles. */
    CountryCode["Sc"] = "SC";
    /** Sierra Leone. */
    CountryCode["Sl"] = "SL";
    /** Singapore. */
    CountryCode["Sg"] = "SG";
    /** Sint Maarten. */
    CountryCode["Sx"] = "SX";
    /** Slovakia. */
    CountryCode["Sk"] = "SK";
    /** Slovenia. */
    CountryCode["Si"] = "SI";
    /** Solomon Islands. */
    CountryCode["Sb"] = "SB";
    /** Somalia. */
    CountryCode["So"] = "SO";
    /** South Africa. */
    CountryCode["Za"] = "ZA";
    /** South Georgia And The South Sandwich Islands. */
    CountryCode["Gs"] = "GS";
    /** South Korea. */
    CountryCode["Kr"] = "KR";
    /** South Sudan. */
    CountryCode["Ss"] = "SS";
    /** Spain. */
    CountryCode["Es"] = "ES";
    /** Sri Lanka. */
    CountryCode["Lk"] = "LK";
    /** St. Vincent. */
    CountryCode["Vc"] = "VC";
    /** Sudan. */
    CountryCode["Sd"] = "SD";
    /** Suriname. */
    CountryCode["Sr"] = "SR";
    /** Svalbard And Jan Mayen. */
    CountryCode["Sj"] = "SJ";
    /** Sweden. */
    CountryCode["Se"] = "SE";
    /** Switzerland. */
    CountryCode["Ch"] = "CH";
    /** Syria. */
    CountryCode["Sy"] = "SY";
    /** Taiwan. */
    CountryCode["Tw"] = "TW";
    /** Tajikistan. */
    CountryCode["Tj"] = "TJ";
    /** Tanzania, United Republic Of. */
    CountryCode["Tz"] = "TZ";
    /** Thailand. */
    CountryCode["Th"] = "TH";
    /** Timor Leste. */
    CountryCode["Tl"] = "TL";
    /** Togo. */
    CountryCode["Tg"] = "TG";
    /** Tokelau. */
    CountryCode["Tk"] = "TK";
    /** Tonga. */
    CountryCode["To"] = "TO";
    /** Trinidad and Tobago. */
    CountryCode["Tt"] = "TT";
    /** Tunisia. */
    CountryCode["Tn"] = "TN";
    /** Turkey. */
    CountryCode["Tr"] = "TR";
    /** Turkmenistan. */
    CountryCode["Tm"] = "TM";
    /** Turks and Caicos Islands. */
    CountryCode["Tc"] = "TC";
    /** Tuvalu. */
    CountryCode["Tv"] = "TV";
    /** Uganda. */
    CountryCode["Ug"] = "UG";
    /** Ukraine. */
    CountryCode["Ua"] = "UA";
    /** United Arab Emirates. */
    CountryCode["Ae"] = "AE";
    /** United Kingdom. */
    CountryCode["Gb"] = "GB";
    /** United States. */
    CountryCode["Us"] = "US";
    /** United States Minor Outlying Islands. */
    CountryCode["Um"] = "UM";
    /** Uruguay. */
    CountryCode["Uy"] = "UY";
    /** Uzbekistan. */
    CountryCode["Uz"] = "UZ";
    /** Vanuatu. */
    CountryCode["Vu"] = "VU";
    /** Venezuela. */
    CountryCode["Ve"] = "VE";
    /** Vietnam. */
    CountryCode["Vn"] = "VN";
    /** Virgin Islands, British. */
    CountryCode["Vg"] = "VG";
    /** Wallis And Futuna. */
    CountryCode["Wf"] = "WF";
    /** Western Sahara. */
    CountryCode["Eh"] = "EH";
    /** Yemen. */
    CountryCode["Ye"] = "YE";
    /** Zambia. */
    CountryCode["Zm"] = "ZM";
    /** Zimbabwe. */
    CountryCode["Zw"] = "ZW";
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));
/** The part of the image that should remain after cropping. */
var CropRegion;
(function (CropRegion) {
    /** Keep the center of the image. */
    CropRegion["Center"] = "CENTER";
    /** Keep the top of the image. */
    CropRegion["Top"] = "TOP";
    /** Keep the bottom of the image. */
    CropRegion["Bottom"] = "BOTTOM";
    /** Keep the left of the image. */
    CropRegion["Left"] = "LEFT";
    /** Keep the right of the image. */
    CropRegion["Right"] = "RIGHT";
})(CropRegion = exports.CropRegion || (exports.CropRegion = {}));
/** Currency codes. */
var CurrencyCode;
(function (CurrencyCode) {
    /** United States Dollars (USD). */
    CurrencyCode["Usd"] = "USD";
    /** Euro (EUR). */
    CurrencyCode["Eur"] = "EUR";
    /** United Kingdom Pounds (GBP). */
    CurrencyCode["Gbp"] = "GBP";
    /** Canadian Dollars (CAD). */
    CurrencyCode["Cad"] = "CAD";
    /** Afghan Afghani (AFN). */
    CurrencyCode["Afn"] = "AFN";
    /** Albanian Lek (ALL). */
    CurrencyCode["All"] = "ALL";
    /** Algerian Dinar (DZD). */
    CurrencyCode["Dzd"] = "DZD";
    /** Angolan Kwanza (AOA). */
    CurrencyCode["Aoa"] = "AOA";
    /** Argentine Pesos (ARS). */
    CurrencyCode["Ars"] = "ARS";
    /** Armenian Dram (AMD). */
    CurrencyCode["Amd"] = "AMD";
    /** Aruban Florin (AWG). */
    CurrencyCode["Awg"] = "AWG";
    /** Australian Dollars (AUD). */
    CurrencyCode["Aud"] = "AUD";
    /** Barbadian Dollar (BBD). */
    CurrencyCode["Bbd"] = "BBD";
    /** Azerbaijani Manat (AZN). */
    CurrencyCode["Azn"] = "AZN";
    /** Bangladesh Taka (BDT). */
    CurrencyCode["Bdt"] = "BDT";
    /** Bahamian Dollar (BSD). */
    CurrencyCode["Bsd"] = "BSD";
    /** Bahraini Dinar (BHD). */
    CurrencyCode["Bhd"] = "BHD";
    /** Burundian Franc (BIF). */
    CurrencyCode["Bif"] = "BIF";
    /** Belarusian Ruble (BYR). */
    CurrencyCode["Byr"] = "BYR";
    /** Belize Dollar (BZD). */
    CurrencyCode["Bzd"] = "BZD";
    /** Bermudian Dollar (BMD). */
    CurrencyCode["Bmd"] = "BMD";
    /** Bhutanese Ngultrum (BTN). */
    CurrencyCode["Btn"] = "BTN";
    /** Bosnia and Herzegovina Convertible Mark (BAM). */
    CurrencyCode["Bam"] = "BAM";
    /** Brazilian Real (BRL). */
    CurrencyCode["Brl"] = "BRL";
    /** Bolivian Boliviano (BOB). */
    CurrencyCode["Bob"] = "BOB";
    /** Botswana Pula (BWP). */
    CurrencyCode["Bwp"] = "BWP";
    /** Brunei Dollar (BND). */
    CurrencyCode["Bnd"] = "BND";
    /** Bulgarian Lev (BGN). */
    CurrencyCode["Bgn"] = "BGN";
    /** Burmese Kyat (MMK). */
    CurrencyCode["Mmk"] = "MMK";
    /** Cambodian Riel. */
    CurrencyCode["Khr"] = "KHR";
    /** Cape Verdean escudo (CVE). */
    CurrencyCode["Cve"] = "CVE";
    /** Cayman Dollars (KYD). */
    CurrencyCode["Kyd"] = "KYD";
    /** Central African CFA Franc (XAF). */
    CurrencyCode["Xaf"] = "XAF";
    /** Chilean Peso (CLP). */
    CurrencyCode["Clp"] = "CLP";
    /** Chinese Yuan Renminbi (CNY). */
    CurrencyCode["Cny"] = "CNY";
    /** Colombian Peso (COP). */
    CurrencyCode["Cop"] = "COP";
    /** Comorian Franc (KMF). */
    CurrencyCode["Kmf"] = "KMF";
    /** Congolese franc (CDF). */
    CurrencyCode["Cdf"] = "CDF";
    /** Costa Rican Colones (CRC). */
    CurrencyCode["Crc"] = "CRC";
    /** Croatian Kuna (HRK). */
    CurrencyCode["Hrk"] = "HRK";
    /** Czech Koruny (CZK). */
    CurrencyCode["Czk"] = "CZK";
    /** Danish Kroner (DKK). */
    CurrencyCode["Dkk"] = "DKK";
    /** Djiboutian Franc (DJF). */
    CurrencyCode["Djf"] = "DJF";
    /** Dominican Peso (DOP). */
    CurrencyCode["Dop"] = "DOP";
    /** East Caribbean Dollar (XCD). */
    CurrencyCode["Xcd"] = "XCD";
    /** Egyptian Pound (EGP). */
    CurrencyCode["Egp"] = "EGP";
    /** Ethiopian Birr (ETB). */
    CurrencyCode["Etb"] = "ETB";
    /** Falkland Islands Pounds (FKP). */
    CurrencyCode["Fkp"] = "FKP";
    /** CFP Franc (XPF). */
    CurrencyCode["Xpf"] = "XPF";
    /** Fijian Dollars (FJD). */
    CurrencyCode["Fjd"] = "FJD";
    /** Gibraltar Pounds (GIP). */
    CurrencyCode["Gip"] = "GIP";
    /** Gambian Dalasi (GMD). */
    CurrencyCode["Gmd"] = "GMD";
    /** Ghanaian Cedi (GHS). */
    CurrencyCode["Ghs"] = "GHS";
    /** Guatemalan Quetzal (GTQ). */
    CurrencyCode["Gtq"] = "GTQ";
    /** Guyanese Dollar (GYD). */
    CurrencyCode["Gyd"] = "GYD";
    /** Georgian Lari (GEL). */
    CurrencyCode["Gel"] = "GEL";
    /** Guinean Franc (GNF). */
    CurrencyCode["Gnf"] = "GNF";
    /** Haitian Gourde (HTG). */
    CurrencyCode["Htg"] = "HTG";
    /** Honduran Lempira (HNL). */
    CurrencyCode["Hnl"] = "HNL";
    /** Hong Kong Dollars (HKD). */
    CurrencyCode["Hkd"] = "HKD";
    /** Hungarian Forint (HUF). */
    CurrencyCode["Huf"] = "HUF";
    /** Icelandic Kronur (ISK). */
    CurrencyCode["Isk"] = "ISK";
    /** Indian Rupees (INR). */
    CurrencyCode["Inr"] = "INR";
    /** Indonesian Rupiah (IDR). */
    CurrencyCode["Idr"] = "IDR";
    /** Israeli New Shekel (NIS). */
    CurrencyCode["Ils"] = "ILS";
    /** Iranian Rial (IRR). */
    CurrencyCode["Irr"] = "IRR";
    /** Iraqi Dinar (IQD). */
    CurrencyCode["Iqd"] = "IQD";
    /** Jamaican Dollars (JMD). */
    CurrencyCode["Jmd"] = "JMD";
    /** Japanese Yen (JPY). */
    CurrencyCode["Jpy"] = "JPY";
    /** Jersey Pound. */
    CurrencyCode["Jep"] = "JEP";
    /** Jordanian Dinar (JOD). */
    CurrencyCode["Jod"] = "JOD";
    /** Kazakhstani Tenge (KZT). */
    CurrencyCode["Kzt"] = "KZT";
    /** Kenyan Shilling (KES). */
    CurrencyCode["Kes"] = "KES";
    /** Kuwaiti Dinar (KWD). */
    CurrencyCode["Kwd"] = "KWD";
    /** Kyrgyzstani Som (KGS). */
    CurrencyCode["Kgs"] = "KGS";
    /** Laotian Kip (LAK). */
    CurrencyCode["Lak"] = "LAK";
    /** Latvian Lati (LVL). */
    CurrencyCode["Lvl"] = "LVL";
    /** Lebanese Pounds (LBP). */
    CurrencyCode["Lbp"] = "LBP";
    /** Lesotho Loti (LSL). */
    CurrencyCode["Lsl"] = "LSL";
    /** Liberian Dollar (LRD). */
    CurrencyCode["Lrd"] = "LRD";
    /** Libyan Dinar (LYD). */
    CurrencyCode["Lyd"] = "LYD";
    /** Lithuanian Litai (LTL). */
    CurrencyCode["Ltl"] = "LTL";
    /** Malagasy Ariary (MGA). */
    CurrencyCode["Mga"] = "MGA";
    /** Macedonia Denar (MKD). */
    CurrencyCode["Mkd"] = "MKD";
    /** Macanese Pataca (MOP). */
    CurrencyCode["Mop"] = "MOP";
    /** Malawian Kwacha (MWK). */
    CurrencyCode["Mwk"] = "MWK";
    /** Maldivian Rufiyaa (MVR). */
    CurrencyCode["Mvr"] = "MVR";
    /** Mexican Pesos (MXN). */
    CurrencyCode["Mxn"] = "MXN";
    /** Malaysian Ringgits (MYR). */
    CurrencyCode["Myr"] = "MYR";
    /** Mauritian Rupee (MUR). */
    CurrencyCode["Mur"] = "MUR";
    /** Moldovan Leu (MDL). */
    CurrencyCode["Mdl"] = "MDL";
    /** Moroccan Dirham. */
    CurrencyCode["Mad"] = "MAD";
    /** Mongolian Tugrik. */
    CurrencyCode["Mnt"] = "MNT";
    /** Mozambican Metical. */
    CurrencyCode["Mzn"] = "MZN";
    /** Namibian Dollar. */
    CurrencyCode["Nad"] = "NAD";
    /** Nepalese Rupee (NPR). */
    CurrencyCode["Npr"] = "NPR";
    /** Netherlands Antillean Guilder. */
    CurrencyCode["Ang"] = "ANG";
    /** New Zealand Dollars (NZD). */
    CurrencyCode["Nzd"] = "NZD";
    /** Nicaraguan Córdoba (NIO). */
    CurrencyCode["Nio"] = "NIO";
    /** Nigerian Naira (NGN). */
    CurrencyCode["Ngn"] = "NGN";
    /** Norwegian Kroner (NOK). */
    CurrencyCode["Nok"] = "NOK";
    /** Omani Rial (OMR). */
    CurrencyCode["Omr"] = "OMR";
    /** Panamian Balboa (PAB). */
    CurrencyCode["Pab"] = "PAB";
    /** Pakistani Rupee (PKR). */
    CurrencyCode["Pkr"] = "PKR";
    /** Papua New Guinean Kina (PGK). */
    CurrencyCode["Pgk"] = "PGK";
    /** Paraguayan Guarani (PYG). */
    CurrencyCode["Pyg"] = "PYG";
    /** Peruvian Nuevo Sol (PEN). */
    CurrencyCode["Pen"] = "PEN";
    /** Philippine Peso (PHP). */
    CurrencyCode["Php"] = "PHP";
    /** Polish Zlotych (PLN). */
    CurrencyCode["Pln"] = "PLN";
    /** Qatari Rial (QAR). */
    CurrencyCode["Qar"] = "QAR";
    /** Romanian Lei (RON). */
    CurrencyCode["Ron"] = "RON";
    /** Russian Rubles (RUB). */
    CurrencyCode["Rub"] = "RUB";
    /** Rwandan Franc (RWF). */
    CurrencyCode["Rwf"] = "RWF";
    /** Samoan Tala (WST). */
    CurrencyCode["Wst"] = "WST";
    /** Saint Helena Pounds (SHP). */
    CurrencyCode["Shp"] = "SHP";
    /** Saudi Riyal (SAR). */
    CurrencyCode["Sar"] = "SAR";
    /** Sao Tome And Principe Dobra (STD). */
    CurrencyCode["Std"] = "STD";
    /** Serbian dinar (RSD). */
    CurrencyCode["Rsd"] = "RSD";
    /** Seychellois Rupee (SCR). */
    CurrencyCode["Scr"] = "SCR";
    /** Sierra Leonean Leone (SLL). */
    CurrencyCode["Sll"] = "SLL";
    /** Singapore Dollars (SGD). */
    CurrencyCode["Sgd"] = "SGD";
    /** Sudanese Pound (SDG). */
    CurrencyCode["Sdg"] = "SDG";
    /** Syrian Pound (SYP). */
    CurrencyCode["Syp"] = "SYP";
    /** South African Rand (ZAR). */
    CurrencyCode["Zar"] = "ZAR";
    /** South Korean Won (KRW). */
    CurrencyCode["Krw"] = "KRW";
    /** South Sudanese Pound (SSP). */
    CurrencyCode["Ssp"] = "SSP";
    /** Solomon Islands Dollar (SBD). */
    CurrencyCode["Sbd"] = "SBD";
    /** Sri Lankan Rupees (LKR). */
    CurrencyCode["Lkr"] = "LKR";
    /** Surinamese Dollar (SRD). */
    CurrencyCode["Srd"] = "SRD";
    /** Swazi Lilangeni (SZL). */
    CurrencyCode["Szl"] = "SZL";
    /** Swedish Kronor (SEK). */
    CurrencyCode["Sek"] = "SEK";
    /** Swiss Francs (CHF). */
    CurrencyCode["Chf"] = "CHF";
    /** Taiwan Dollars (TWD). */
    CurrencyCode["Twd"] = "TWD";
    /** Thai baht (THB). */
    CurrencyCode["Thb"] = "THB";
    /** Tajikistani Somoni (TJS). */
    CurrencyCode["Tjs"] = "TJS";
    /** Tanzanian Shilling (TZS). */
    CurrencyCode["Tzs"] = "TZS";
    /** Tongan Pa'anga (TOP). */
    CurrencyCode["Top"] = "TOP";
    /** Trinidad and Tobago Dollars (TTD). */
    CurrencyCode["Ttd"] = "TTD";
    /** Tunisian Dinar (TND). */
    CurrencyCode["Tnd"] = "TND";
    /** Turkish Lira (TRY). */
    CurrencyCode["Try"] = "TRY";
    /** Turkmenistani Manat (TMT). */
    CurrencyCode["Tmt"] = "TMT";
    /** Ugandan Shilling (UGX). */
    CurrencyCode["Ugx"] = "UGX";
    /** Ukrainian Hryvnia (UAH). */
    CurrencyCode["Uah"] = "UAH";
    /** United Arab Emirates Dirham (AED). */
    CurrencyCode["Aed"] = "AED";
    /** Uruguayan Pesos (UYU). */
    CurrencyCode["Uyu"] = "UYU";
    /** Uzbekistan som (UZS). */
    CurrencyCode["Uzs"] = "UZS";
    /** Vanuatu Vatu (VUV). */
    CurrencyCode["Vuv"] = "VUV";
    /** Venezuelan Bolivares (VEF). */
    CurrencyCode["Vef"] = "VEF";
    /** Vietnamese đồng (VND). */
    CurrencyCode["Vnd"] = "VND";
    /** West African CFA franc (XOF). */
    CurrencyCode["Xof"] = "XOF";
    /** Yemeni Rial (YER). */
    CurrencyCode["Yer"] = "YER";
    /** Zambian Kwacha (ZMW). */
    CurrencyCode["Zmw"] = "ZMW";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
/**
 * The valid values for the marketing subscription opt-in active at the time the customer consented to email
 * marketing.
 *
 * The levels are defined by [the M3AAWG best practices guideline
 *   document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).
 */
var CustomerMarketingOptInLevel;
(function (CustomerMarketingOptInLevel) {
    /**
     * The customer started receiving marketing email(s) after providing their email address, without any
     * intermediate steps.
     */
    CustomerMarketingOptInLevel["SingleOptIn"] = "SINGLE_OPT_IN";
    /**
     * After providing their email address, the customer received a confirmation email which required them to
     * perform a prescribed action before receiving marketing emails.
     */
    CustomerMarketingOptInLevel["ConfirmedOptIn"] = "CONFIRMED_OPT_IN";
    /** The customer receives marketing emails, but the original opt-in process is unknown. */
    CustomerMarketingOptInLevel["Unknown"] = "UNKNOWN";
})(CustomerMarketingOptInLevel = exports.CustomerMarketingOptInLevel || (exports.CustomerMarketingOptInLevel = {}));
/** The set of valid sort keys for the CustomerSavedSearch query. */
var CustomerSavedSearchSortKeys;
(function (CustomerSavedSearchSortKeys) {
    /** Sort by the `name` value. */
    CustomerSavedSearchSortKeys["Name"] = "NAME";
    /** Sort by the `id` value. */
    CustomerSavedSearchSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    CustomerSavedSearchSortKeys["Relevance"] = "RELEVANCE";
})(CustomerSavedSearchSortKeys = exports.CustomerSavedSearchSortKeys || (exports.CustomerSavedSearchSortKeys = {}));
/** The set of valid sort keys for the Customer query. */
var CustomerSortKeys;
(function (CustomerSortKeys) {
    /** Sort by the `name` value. */
    CustomerSortKeys["Name"] = "NAME";
    /** Sort by the `location` value. */
    CustomerSortKeys["Location"] = "LOCATION";
    /** Sort by the `orders_count` value. */
    CustomerSortKeys["OrdersCount"] = "ORDERS_COUNT";
    /** Sort by the `last_order_date` value. */
    CustomerSortKeys["LastOrderDate"] = "LAST_ORDER_DATE";
    /** Sort by the `total_spent` value. */
    CustomerSortKeys["TotalSpent"] = "TOTAL_SPENT";
    /** Sort by the `updated_at` value. */
    CustomerSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `id` value. */
    CustomerSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    CustomerSortKeys["Relevance"] = "RELEVANCE";
})(CustomerSortKeys = exports.CustomerSortKeys || (exports.CustomerSortKeys = {}));
/** The valid values for the state of a customer's account with a shop. */
var CustomerState;
(function (CustomerState) {
    /** The customer declined the email invite to create an account. */
    CustomerState["Declined"] = "DECLINED";
    /** The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time. */
    CustomerState["Disabled"] = "DISABLED";
    /** The customer has created an account. */
    CustomerState["Enabled"] = "ENABLED";
    /** The customer has received an email invite to create an account. */
    CustomerState["Invited"] = "INVITED";
})(CustomerState = exports.CustomerState || (exports.CustomerState = {}));
/** Days of the week from Monday to Sunday. */
var DayOfTheWeek;
(function (DayOfTheWeek) {
    /** Monday. */
    DayOfTheWeek["Monday"] = "MONDAY";
    /** Tuesday. */
    DayOfTheWeek["Tuesday"] = "TUESDAY";
    /** Wednesday. */
    DayOfTheWeek["Wednesday"] = "WEDNESDAY";
    /** Thursday. */
    DayOfTheWeek["Thursday"] = "THURSDAY";
    /** Friday. */
    DayOfTheWeek["Friday"] = "FRIDAY";
    /** Saturday. */
    DayOfTheWeek["Saturday"] = "SATURDAY";
    /** Sunday. */
    DayOfTheWeek["Sunday"] = "SUNDAY";
})(DayOfTheWeek = exports.DayOfTheWeek || (exports.DayOfTheWeek = {}));
/** The set of valid sort keys for the DeletionEvent query. */
var DeletionEventSortKeys;
(function (DeletionEventSortKeys) {
    /** Sort by the `created_at` value. */
    DeletionEventSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    DeletionEventSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    DeletionEventSortKeys["Relevance"] = "RELEVANCE";
})(DeletionEventSortKeys = exports.DeletionEventSortKeys || (exports.DeletionEventSortKeys = {}));
/** The supported subject types of deletion events. */
var DeletionEventSubjectType;
(function (DeletionEventSubjectType) {
    DeletionEventSubjectType["Collection"] = "COLLECTION";
    DeletionEventSubjectType["Product"] = "PRODUCT";
})(DeletionEventSubjectType = exports.DeletionEventSubjectType || (exports.DeletionEventSubjectType = {}));
/** The field type that the condition will be applied to. */
var DeliveryConditionField;
(function (DeliveryConditionField) {
    /** Condition will check against the total weight of the order. */
    DeliveryConditionField["TotalWeight"] = "TOTAL_WEIGHT";
    /** Condition will check against the total price of the order. */
    DeliveryConditionField["TotalPrice"] = "TOTAL_PRICE";
})(DeliveryConditionField = exports.DeliveryConditionField || (exports.DeliveryConditionField = {}));
/** The operator to use to determine if the condition passes. */
var DeliveryConditionOperator;
(function (DeliveryConditionOperator) {
    /** The condition will check if the field is greater than or equal to the criteria. */
    DeliveryConditionOperator["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** The condition will check if the field is less than or equal to the criteria. */
    DeliveryConditionOperator["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
})(DeliveryConditionOperator = exports.DeliveryConditionOperator || (exports.DeliveryConditionOperator = {}));
/** Reasons the shop is blocked from converting to full multi-location delivery profiles mode. */
var DeliveryLegacyModeBlockedReason;
(function (DeliveryLegacyModeBlockedReason) {
    /** Multi-Location is disabled. */
    DeliveryLegacyModeBlockedReason["MultiLocationDisabled"] = "MULTI_LOCATION_DISABLED";
    /** No locations that can fulfill online orders. */
    DeliveryLegacyModeBlockedReason["NoLocationsFulfillingOnlineOrders"] = "NO_LOCATIONS_FULFILLING_ONLINE_ORDERS";
})(DeliveryLegacyModeBlockedReason = exports.DeliveryLegacyModeBlockedReason || (exports.DeliveryLegacyModeBlockedReason = {}));
/** The different types of method definitions to filter by. */
var DeliveryMethodDefinitionType;
(function (DeliveryMethodDefinitionType) {
    /** Static mechant-defined rates. */
    DeliveryMethodDefinitionType["Merchant"] = "MERCHANT";
    /** Dynamic participant rates. */
    DeliveryMethodDefinitionType["Participant"] = "PARTICIPANT";
})(DeliveryMethodDefinitionType = exports.DeliveryMethodDefinitionType || (exports.DeliveryMethodDefinitionType = {}));
/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
var DigitalWallet;
(function (DigitalWallet) {
    /** Apple Pay. */
    DigitalWallet["ApplePay"] = "APPLE_PAY";
    /** Android Pay. */
    DigitalWallet["AndroidPay"] = "ANDROID_PAY";
    /** Google Pay. */
    DigitalWallet["GooglePay"] = "GOOGLE_PAY";
    /** Shopify Pay. */
    DigitalWallet["ShopifyPay"] = "SHOPIFY_PAY";
})(DigitalWallet = exports.DigitalWallet || (exports.DigitalWallet = {}));
/** The method by which the discount's value is allocated onto its entitled lines. */
var DiscountApplicationAllocationMethod;
(function (DiscountApplicationAllocationMethod) {
    /** The value is spread across all entitled lines. */
    DiscountApplicationAllocationMethod["Across"] = "ACROSS";
    /** The value is applied onto every entitled line. */
    DiscountApplicationAllocationMethod["Each"] = "EACH";
    /** The value is specifically applied onto a particular line. */
    DiscountApplicationAllocationMethod["One"] = "ONE";
})(DiscountApplicationAllocationMethod = exports.DiscountApplicationAllocationMethod || (exports.DiscountApplicationAllocationMethod = {}));
/**
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 */
var DiscountApplicationTargetSelection;
(function (DiscountApplicationTargetSelection) {
    /** The discount is allocated onto all the lines. */
    DiscountApplicationTargetSelection["All"] = "ALL";
    /** The discount is allocated onto only the lines it is entitled for. */
    DiscountApplicationTargetSelection["Entitled"] = "ENTITLED";
    /** The discount is allocated onto explicitly chosen lines. */
    DiscountApplicationTargetSelection["Explicit"] = "EXPLICIT";
})(DiscountApplicationTargetSelection = exports.DiscountApplicationTargetSelection || (exports.DiscountApplicationTargetSelection = {}));
/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
var DiscountApplicationTargetType;
(function (DiscountApplicationTargetType) {
    /** The discount applies onto line items. */
    DiscountApplicationTargetType["LineItem"] = "LINE_ITEM";
    /** The discount applies onto shipping lines. */
    DiscountApplicationTargetType["ShippingLine"] = "SHIPPING_LINE";
})(DiscountApplicationTargetType = exports.DiscountApplicationTargetType || (exports.DiscountApplicationTargetType = {}));
/** The set of valid sort keys for the DiscountCode query. */
var DiscountCodeSortKeys;
(function (DiscountCodeSortKeys) {
    /** Sort by the `code` value. */
    DiscountCodeSortKeys["Code"] = "CODE";
    /** Sort by the `created_at` value. */
    DiscountCodeSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    DiscountCodeSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    DiscountCodeSortKeys["Relevance"] = "RELEVANCE";
})(DiscountCodeSortKeys = exports.DiscountCodeSortKeys || (exports.DiscountCodeSortKeys = {}));
/** Possible error codes that could be returned by a discounts mutation. */
var DiscountErrorCode;
(function (DiscountErrorCode) {
    /** Input value is blank. */
    DiscountErrorCode["Blank"] = "BLANK";
    /** Input value is not present. */
    DiscountErrorCode["Present"] = "PRESENT";
    /** Input value should be equal to allowed value. */
    DiscountErrorCode["EqualTo"] = "EQUAL_TO";
    /** Input value should be greater than minimum allowed value. */
    DiscountErrorCode["GreaterThan"] = "GREATER_THAN";
    /** Input value should be greater than or equal to minimum allowed value. */
    DiscountErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** Input value is invalid. */
    DiscountErrorCode["Invalid"] = "INVALID";
    /** Input value should be less or equal to maximum allowed value. */
    DiscountErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** Input value should be less than maximum allowed value. */
    DiscountErrorCode["LessThan"] = "LESS_THAN";
    /** Input value is already taken. */
    DiscountErrorCode["Taken"] = "TAKEN";
    /** Input value is too long. */
    DiscountErrorCode["TooLong"] = "TOO_LONG";
    /** Input value is too short. */
    DiscountErrorCode["TooShort"] = "TOO_SHORT";
    /** Unexpected internal error happened. */
    DiscountErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** Too many arguments provided. */
    DiscountErrorCode["TooManyArguments"] = "TOO_MANY_ARGUMENTS";
    /** Missing a required argument. */
    DiscountErrorCode["MissingArgument"] = "MISSING_ARGUMENT";
    /** Exceeded maximum allowed value. */
    DiscountErrorCode["ExceededMax"] = "EXCEEDED_MAX";
    /** Cannot have both minimum subtotal and quantity present. */
    DiscountErrorCode["MinimumSubtotalAndQuantityRangeBothPresent"] = "MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT";
    /** Value is outside allowed range. */
    DiscountErrorCode["ValueOutsideRange"] = "VALUE_OUTSIDE_RANGE";
    /** Active period overlaps with other automatic discounts. At any given time, only one automatic discount can be active. */
    DiscountErrorCode["ActivePeriodOverlap"] = "ACTIVE_PERIOD_OVERLAP";
    /** Attribute selection contains conflicting settings. */
    DiscountErrorCode["Conflict"] = "CONFLICT";
    /** Value is already present through another selection. */
    DiscountErrorCode["ImplicitDuplicate"] = "IMPLICIT_DUPLICATE";
    /** Input value is already present. */
    DiscountErrorCode["Duplicate"] = "DUPLICATE";
})(DiscountErrorCode = exports.DiscountErrorCode || (exports.DiscountErrorCode = {}));
/** The status of the discount. */
var DiscountStatus;
(function (DiscountStatus) {
    /** The discount is active. */
    DiscountStatus["Active"] = "ACTIVE";
    /** The discount is expired. */
    DiscountStatus["Expired"] = "EXPIRED";
    /** The discount is scheduled. */
    DiscountStatus["Scheduled"] = "SCHEDULED";
})(DiscountStatus = exports.DiscountStatus || (exports.DiscountStatus = {}));
/** The possible statuses of a dispute. */
var DisputeStatus;
(function (DisputeStatus) {
    DisputeStatus["NeedsResponse"] = "NEEDS_RESPONSE";
    DisputeStatus["UnderReview"] = "UNDER_REVIEW";
    DisputeStatus["ChargeRefunded"] = "CHARGE_REFUNDED";
    DisputeStatus["Accepted"] = "ACCEPTED";
    DisputeStatus["Won"] = "WON";
    DisputeStatus["Lost"] = "LOST";
})(DisputeStatus = exports.DisputeStatus || (exports.DisputeStatus = {}));
/** The possible types for a dispute. */
var DisputeType;
(function (DisputeType) {
    /** The dispute has turned into a chargeback. */
    DisputeType["Chargeback"] = "CHARGEBACK";
    /** The dispute is in the inquiry phase. */
    DisputeType["Inquiry"] = "INQUIRY";
})(DisputeType = exports.DisputeType || (exports.DisputeType = {}));
/** The valid discount types that can be applied to a draft order. */
var DraftOrderAppliedDiscountType;
(function (DraftOrderAppliedDiscountType) {
    /** A fixed amount in the store's currency. */
    DraftOrderAppliedDiscountType["FixedAmount"] = "FIXED_AMOUNT";
    /** A percentage of the order subtotal. */
    DraftOrderAppliedDiscountType["Percentage"] = "PERCENTAGE";
})(DraftOrderAppliedDiscountType = exports.DraftOrderAppliedDiscountType || (exports.DraftOrderAppliedDiscountType = {}));
/** The set of valid sort keys for the DraftOrder query. */
var DraftOrderSortKeys;
(function (DraftOrderSortKeys) {
    /** Sort by the `number` value. */
    DraftOrderSortKeys["Number"] = "NUMBER";
    /** Sort by the `updated_at` value. */
    DraftOrderSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `status` value. */
    DraftOrderSortKeys["Status"] = "STATUS";
    /** Sort by the `total_price` value. */
    DraftOrderSortKeys["TotalPrice"] = "TOTAL_PRICE";
    /** Sort by the `customer_name` value. */
    DraftOrderSortKeys["CustomerName"] = "CUSTOMER_NAME";
    /** Sort by the `id` value. */
    DraftOrderSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    DraftOrderSortKeys["Relevance"] = "RELEVANCE";
})(DraftOrderSortKeys = exports.DraftOrderSortKeys || (exports.DraftOrderSortKeys = {}));
/** The valid statuses for a draft order. */
var DraftOrderStatus;
(function (DraftOrderStatus) {
    /** The draft order has been paid. */
    DraftOrderStatus["Completed"] = "COMPLETED";
    /** An invoice for the draft order has been sent to the customer. */
    DraftOrderStatus["InvoiceSent"] = "INVOICE_SENT";
    /** The draft order is open. It has not been paid, and an invoice hasn't been sent. */
    DraftOrderStatus["Open"] = "OPEN";
})(DraftOrderStatus = exports.DraftOrderStatus || (exports.DraftOrderStatus = {}));
/** The set of valid sort keys for the Event query. */
var EventSortKeys;
(function (EventSortKeys) {
    /** Sort by the `created_at` value. */
    EventSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    EventSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    EventSortKeys["Relevance"] = "RELEVANCE";
})(EventSortKeys = exports.EventSortKeys || (exports.EventSortKeys = {}));
/** The display status of a fulfillment. */
var FulfillmentDisplayStatus;
(function (FulfillmentDisplayStatus) {
    /** Displayed as **Attempted delivery**. */
    FulfillmentDisplayStatus["AttemptedDelivery"] = "ATTEMPTED_DELIVERY";
    /** Displayed as **Canceled**. */
    FulfillmentDisplayStatus["Canceled"] = "CANCELED";
    /** Displayed as **Confirmed**. */
    FulfillmentDisplayStatus["Confirmed"] = "CONFIRMED";
    /** Displayed as **Delivered**. */
    FulfillmentDisplayStatus["Delivered"] = "DELIVERED";
    /** Displayed as **Failure**. */
    FulfillmentDisplayStatus["Failure"] = "FAILURE";
    /** Displayed as **Fulfilled**. */
    FulfillmentDisplayStatus["Fulfilled"] = "FULFILLED";
    /** Displayed as **In transit**. */
    FulfillmentDisplayStatus["InTransit"] = "IN_TRANSIT";
    /** Displayed as **Label printed**. */
    FulfillmentDisplayStatus["LabelPrinted"] = "LABEL_PRINTED";
    /** Displayed as **Label purchased**. */
    FulfillmentDisplayStatus["LabelPurchased"] = "LABEL_PURCHASED";
    /** Displayed as **Label voided**. */
    FulfillmentDisplayStatus["LabelVoided"] = "LABEL_VOIDED";
    /** Displayed as **Marked as fulfilled**. */
    FulfillmentDisplayStatus["MarkedAsFulfilled"] = "MARKED_AS_FULFILLED";
    /** Displayed as **Not delivered**. */
    FulfillmentDisplayStatus["NotDelivered"] = "NOT_DELIVERED";
    /** Displayed as **Out for delivery**. */
    FulfillmentDisplayStatus["OutForDelivery"] = "OUT_FOR_DELIVERY";
    /** Displayed as **Ready for pickup**. */
    FulfillmentDisplayStatus["ReadyForPickup"] = "READY_FOR_PICKUP";
    /** Displayed as **Submitted**. */
    FulfillmentDisplayStatus["Submitted"] = "SUBMITTED";
})(FulfillmentDisplayStatus = exports.FulfillmentDisplayStatus || (exports.FulfillmentDisplayStatus = {}));
/** The set of valid sort keys for the FulfillmentEvent query. */
var FulfillmentEventSortKeys;
(function (FulfillmentEventSortKeys) {
    /** Sort by the `happened_at` value. */
    FulfillmentEventSortKeys["HappenedAt"] = "HAPPENED_AT";
    /** Sort by the `id` value. */
    FulfillmentEventSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    FulfillmentEventSortKeys["Relevance"] = "RELEVANCE";
})(FulfillmentEventSortKeys = exports.FulfillmentEventSortKeys || (exports.FulfillmentEventSortKeys = {}));
/** Event status' describe the status of a fulfillment. */
var FulfillmentEventStatus;
(function (FulfillmentEventStatus) {
    /** A shipping label has been purchased. */
    FulfillmentEventStatus["LabelPurchased"] = "LABEL_PURCHASED";
    /** A purchased shipping label has been printed. */
    FulfillmentEventStatus["LabelPrinted"] = "LABEL_PRINTED";
    /** The fulfillment is ready to be picked up. */
    FulfillmentEventStatus["ReadyForPickup"] = "READY_FOR_PICKUP";
    /** The fulfillment is confirmed. */
    FulfillmentEventStatus["Confirmed"] = "CONFIRMED";
    /** The fulfillment is in transit. */
    FulfillmentEventStatus["InTransit"] = "IN_TRANSIT";
    /** The fulfillment is out for delivery. */
    FulfillmentEventStatus["OutForDelivery"] = "OUT_FOR_DELIVERY";
    /** A delivery was attempted. */
    FulfillmentEventStatus["AttemptedDelivery"] = "ATTEMPTED_DELIVERY";
    /** The fulfillment was successfully delivered. */
    FulfillmentEventStatus["Delivered"] = "DELIVERED";
    /** The fulfillment request failed. */
    FulfillmentEventStatus["Failure"] = "FAILURE";
})(FulfillmentEventStatus = exports.FulfillmentEventStatus || (exports.FulfillmentEventStatus = {}));
/** The actions that can be taken on a fulfillment order. */
var FulfillmentOrderAction;
(function (FulfillmentOrderAction) {
    /**
     * Create a fulfillment for selected line items in the fulfillment order. The
     * corresponding mutation for this action is FulfillmentCreateV2.
     */
    FulfillmentOrderAction["CreateFulfillment"] = "CREATE_FULFILLMENT";
    /**
     * Send a request for fulfilling selected line items in a fulfillment order to a
     * fulfillment service. The corresponding mutation for this action is
     * FulfillmentOrderSubmitFulfillmentRequest.
     */
    FulfillmentOrderAction["RequestFulfillment"] = "REQUEST_FULFILLMENT";
    /** Cancel a fulfillment order. The corresponding mutation for this action is FulfillmentOrderCancel. */
    FulfillmentOrderAction["CancelFulfillmentOrder"] = "CANCEL_FULFILLMENT_ORDER";
    /** Move a fulfillment order. The corresponding mutation for this action is FulfillmentOrderMove. */
    FulfillmentOrderAction["Move"] = "MOVE";
    /**
     * Send a cancellation request to the fulfillment service of a fulfillment order.
     * The corresponding mutation for this action is
     * FulfillmentOrderSubmitCancellationRequest.
     */
    FulfillmentOrderAction["RequestCancellation"] = "REQUEST_CANCELLATION";
    /** Open an external URL to initiate the fulfillment process outside Shopify. */
    FulfillmentOrderAction["External"] = "EXTERNAL";
})(FulfillmentOrderAction = exports.FulfillmentOrderAction || (exports.FulfillmentOrderAction = {}));
/** The assigment status to be used to filter fulfillment orders. */
var FulfillmentOrderAssignmentStatus;
(function (FulfillmentOrderAssignmentStatus) {
    /**
     * Fulfillment orders for which the merchant has requested cancellation of
     * the previously accepted fulfillment request.
     */
    FulfillmentOrderAssignmentStatus["CancellationRequested"] = "CANCELLATION_REQUESTED";
    /** Fulfillment orders for which the merchant has requested fulfillment. */
    FulfillmentOrderAssignmentStatus["FulfillmentRequested"] = "FULFILLMENT_REQUESTED";
    /**
     * Fulfillment orders for which the merchant's fulfillment request has been accepted.
     * Any number of fulfillments can be created on these fulfillment orders
     * to completely fulfill the requested items.
     */
    FulfillmentOrderAssignmentStatus["FulfillmentAccepted"] = "FULFILLMENT_ACCEPTED";
})(FulfillmentOrderAssignmentStatus = exports.FulfillmentOrderAssignmentStatus || (exports.FulfillmentOrderAssignmentStatus = {}));
/** The kinds of request merchants can make to a fulfillment service. */
var FulfillmentOrderMerchantRequestKind;
(function (FulfillmentOrderMerchantRequestKind) {
    /** The merchant requested fulfillment for a fulfillment order. */
    FulfillmentOrderMerchantRequestKind["FulfillmentRequest"] = "FULFILLMENT_REQUEST";
    /** The merchant requested cancellation of an accepted or in-progress fulfillment order. */
    FulfillmentOrderMerchantRequestKind["CancellationRequest"] = "CANCELLATION_REQUEST";
})(FulfillmentOrderMerchantRequestKind = exports.FulfillmentOrderMerchantRequestKind || (exports.FulfillmentOrderMerchantRequestKind = {}));
/** The request status of a fulfillment order. */
var FulfillmentOrderRequestStatus;
(function (FulfillmentOrderRequestStatus) {
    /**
     * The initial request status for the newly created fulfillment orders. This is the only valid
     * request status for fulfillment orders that aren't assigned to a fulfillment service.
     */
    FulfillmentOrderRequestStatus["Unsubmitted"] = "UNSUBMITTED";
    /** The merchant requested fulfillment for this fulfillment order. */
    FulfillmentOrderRequestStatus["Submitted"] = "SUBMITTED";
    /** The fulfillment service accepted the merchant's fulfillment request. */
    FulfillmentOrderRequestStatus["Accepted"] = "ACCEPTED";
    /** The fulfillment service rejected the merchant's fulfillment request. */
    FulfillmentOrderRequestStatus["Rejected"] = "REJECTED";
    /** The merchant requested a cancellation of the fulfillment request for this fulfillment order. */
    FulfillmentOrderRequestStatus["CancellationRequested"] = "CANCELLATION_REQUESTED";
    /** The fulfillment service accepted the merchant's fulfillment cancellation request. */
    FulfillmentOrderRequestStatus["CancellationAccepted"] = "CANCELLATION_ACCEPTED";
    /** The fulfillment service rejected the merchant's fulfillment cancellation request. */
    FulfillmentOrderRequestStatus["CancellationRejected"] = "CANCELLATION_REJECTED";
    /** The fulfillment service closed the fulfillment order without completing it. */
    FulfillmentOrderRequestStatus["Closed"] = "CLOSED";
})(FulfillmentOrderRequestStatus = exports.FulfillmentOrderRequestStatus || (exports.FulfillmentOrderRequestStatus = {}));
/** The set of valid sort keys for the FulfillmentOrder query. */
var FulfillmentOrderSortKeys;
(function (FulfillmentOrderSortKeys) {
    /** Sort by the `id` value. */
    FulfillmentOrderSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    FulfillmentOrderSortKeys["Relevance"] = "RELEVANCE";
})(FulfillmentOrderSortKeys = exports.FulfillmentOrderSortKeys || (exports.FulfillmentOrderSortKeys = {}));
/** The status of a fulfillment order. */
var FulfillmentOrderStatus;
(function (FulfillmentOrderStatus) {
    /** The default state for newly created fulfillment orders. */
    FulfillmentOrderStatus["Open"] = "OPEN";
    /** The fulfillment order is being processed. */
    FulfillmentOrderStatus["InProgress"] = "IN_PROGRESS";
    /** The fulfillment order has been cancelled by the merchant. */
    FulfillmentOrderStatus["Cancelled"] = "CANCELLED";
    /** The fulfillment order cannot be completed as requested. */
    FulfillmentOrderStatus["Incomplete"] = "INCOMPLETE";
    /** The fulfillment order has been completed and closed. */
    FulfillmentOrderStatus["Closed"] = "CLOSED";
})(FulfillmentOrderStatus = exports.FulfillmentOrderStatus || (exports.FulfillmentOrderStatus = {}));
/** The type of a fulfillment service. */
var FulfillmentServiceType;
(function (FulfillmentServiceType) {
    /** Fulfillment by gift card. */
    FulfillmentServiceType["GiftCard"] = "GIFT_CARD";
    /** Manual fulfillment by the merchant. */
    FulfillmentServiceType["Manual"] = "MANUAL";
    /** Fullfillment by a third-party fulfillment service. */
    FulfillmentServiceType["ThirdParty"] = "THIRD_PARTY";
})(FulfillmentServiceType = exports.FulfillmentServiceType || (exports.FulfillmentServiceType = {}));
/** The status of a fulfillment. */
var FulfillmentStatus;
(function (FulfillmentStatus) {
    /**
     * Shopify has created the fulfillment and is waiting for the third-party
     * fulfillment service to transition it to `open` or `success`.
     */
    FulfillmentStatus["Pending"] = "PENDING";
    /** The third-party fulfillment service has acknowledged the fulfilment and is processing it. */
    FulfillmentStatus["Open"] = "OPEN";
    /** The fulfillment was completed successfully. */
    FulfillmentStatus["Success"] = "SUCCESS";
    /** The fulfillment was canceled. */
    FulfillmentStatus["Cancelled"] = "CANCELLED";
    /** There was an error with the fulfillment request. */
    FulfillmentStatus["Error"] = "ERROR";
    /** The fulfillment request failed. */
    FulfillmentStatus["Failure"] = "FAILURE";
})(FulfillmentStatus = exports.FulfillmentStatus || (exports.FulfillmentStatus = {}));
/** List of supported image content types. */
var ImageContentType;
(function (ImageContentType) {
    /** A PNG image. */
    ImageContentType["Png"] = "PNG";
    /** A JPG image. */
    ImageContentType["Jpg"] = "JPG";
    /** A WEBP image. */
    ImageContentType["Webp"] = "WEBP";
})(ImageContentType = exports.ImageContentType || (exports.ImageContentType = {}));
/** The locale language allowed for Kit Skill. */
var KitSkillLocale;
(function (KitSkillLocale) {
    /** English language. */
    KitSkillLocale["En"] = "EN";
})(KitSkillLocale = exports.KitSkillLocale || (exports.KitSkillLocale = {}));
/** The set of valid sort keys for the Location query. */
var LocationSortKeys;
(function (LocationSortKeys) {
    /** Sort by the `name` value. */
    LocationSortKeys["Name"] = "NAME";
    /** Sort by the `id` value. */
    LocationSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    LocationSortKeys["Relevance"] = "RELEVANCE";
})(LocationSortKeys = exports.LocationSortKeys || (exports.LocationSortKeys = {}));
/** The error code resulted from the marketing activity extension integration. */
var MarketingActivityExtensionAppErrorCode;
(function (MarketingActivityExtensionAppErrorCode) {
    /** The shop/user must be onboarded to use the app. */
    MarketingActivityExtensionAppErrorCode["NotOnboardedError"] = "NOT_ONBOARDED_ERROR";
    /** The app has returned validation errors. */
    MarketingActivityExtensionAppErrorCode["ValidationError"] = "VALIDATION_ERROR";
    /** The app is not responding or returning unexpected data. */
    MarketingActivityExtensionAppErrorCode["ApiError"] = "API_ERROR";
    /** The app has returned an error when invoking the platform. */
    MarketingActivityExtensionAppErrorCode["PlatformError"] = "PLATFORM_ERROR";
    /** The app needs to be installed. */
    MarketingActivityExtensionAppErrorCode["InstallRequiredError"] = "INSTALL_REQUIRED_ERROR";
})(MarketingActivityExtensionAppErrorCode = exports.MarketingActivityExtensionAppErrorCode || (exports.MarketingActivityExtensionAppErrorCode = {}));
/** The set of valid sort keys for the MarketingActivity query. */
var MarketingActivitySortKeys;
(function (MarketingActivitySortKeys) {
    /** Sort by the `title` value. */
    MarketingActivitySortKeys["Title"] = "TITLE";
    /** Sort by the `created_at` value. */
    MarketingActivitySortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    MarketingActivitySortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    MarketingActivitySortKeys["Relevance"] = "RELEVANCE";
})(MarketingActivitySortKeys = exports.MarketingActivitySortKeys || (exports.MarketingActivitySortKeys = {}));
/** Status helps to identify if this marketing activity has been completed, queued, failed etc. */
var MarketingActivityStatus;
(function (MarketingActivityStatus) {
    /** This marketing activity is currently running. */
    MarketingActivityStatus["Active"] = "ACTIVE";
    /** This marketing activity is permanently unavailable. */
    MarketingActivityStatus["Deleted"] = "DELETED";
    /** This marketing activity was deleted and it was triggered from outside of Shopify. */
    MarketingActivityStatus["DeletedExternally"] = "DELETED_EXTERNALLY";
    /** This marketing activity is disconnected and no longer editable. */
    MarketingActivityStatus["Disconnected"] = "DISCONNECTED";
    /** This marketing activity is unable to run. */
    MarketingActivityStatus["Failed"] = "FAILED";
    /** This marketing activity has completed running. */
    MarketingActivityStatus["Inactive"] = "INACTIVE";
    /** This marketing activity is currently not running. */
    MarketingActivityStatus["Paused"] = "PAUSED";
    /** This marketing activity is pending creation on the app's platform. */
    MarketingActivityStatus["Pending"] = "PENDING";
    /** This marketing activity is scheduled to run. */
    MarketingActivityStatus["Scheduled"] = "SCHEDULED";
    /** There is no defined status for external marketing activities. */
    MarketingActivityStatus["Undefined"] = "UNDEFINED";
})(MarketingActivityStatus = exports.MarketingActivityStatus || (exports.MarketingActivityStatus = {}));
/** The budget type for a marketing activity. */
var MarketingBudgetBudgetType;
(function (MarketingBudgetBudgetType) {
    /** A daily budget. */
    MarketingBudgetBudgetType["Daily"] = "DAILY";
    /** A budget for the lifetime of a marketing activity. */
    MarketingBudgetBudgetType["Lifetime"] = "LIFETIME";
})(MarketingBudgetBudgetType = exports.MarketingBudgetBudgetType || (exports.MarketingBudgetBudgetType = {}));
/**
 * The available marketing channels for a marketing activity or event. A marketing
 * channel is broad category of marketing, used for reporting aggregation.
 */
var MarketingChannel;
(function (MarketingChannel) {
    /** Paid search. */
    MarketingChannel["Search"] = "SEARCH";
    /** Displayed ads. */
    MarketingChannel["Display"] = "DISPLAY";
    /** Social media. */
    MarketingChannel["Social"] = "SOCIAL";
    /** Email. */
    MarketingChannel["Email"] = "EMAIL";
    /** Referral links. */
    MarketingChannel["Referral"] = "REFERRAL";
})(MarketingChannel = exports.MarketingChannel || (exports.MarketingChannel = {}));
/** The set of valid sort keys for the MarketingEvent query. */
var MarketingEventSortKeys;
(function (MarketingEventSortKeys) {
    /** Sort by the `started_at` value. */
    MarketingEventSortKeys["StartedAt"] = "STARTED_AT";
    /** Sort by the `id` value. */
    MarketingEventSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    MarketingEventSortKeys["Relevance"] = "RELEVANCE";
})(MarketingEventSortKeys = exports.MarketingEventSortKeys || (exports.MarketingEventSortKeys = {}));
/** The available types of marketing event. */
var MarketingTactic;
(function (MarketingTactic) {
    /** An abandoned cart recovery email. */
    MarketingTactic["AbandonedCart"] = "ABANDONED_CART";
    /** An ad, such as a Facebook ad. */
    MarketingTactic["Ad"] = "AD";
    /** An affiliate link. */
    MarketingTactic["Affiliate"] = "AFFILIATE";
    /** A link. */
    MarketingTactic["Link"] = "LINK";
    /** A loyalty program. */
    MarketingTactic["Loyalty"] = "LOYALTY";
    /** A messaging app, such as Facebook Messenger. */
    MarketingTactic["Message"] = "MESSAGE";
    /** A newsletter. */
    MarketingTactic["Newsletter"] = "NEWSLETTER";
    /** A notification in the Shopify admin. */
    MarketingTactic["Notification"] = "NOTIFICATION";
    /** A blog post. */
    MarketingTactic["Post"] = "POST";
    /** A retargeting ad. */
    MarketingTactic["Retargeting"] = "RETARGETING";
    /** A transactional email. */
    MarketingTactic["Transactional"] = "TRANSACTIONAL";
    /** Search engine optimization. */
    MarketingTactic["Seo"] = "SEO";
    /** A direct visit to the online store. */
    MarketingTactic["Direct"] = "DIRECT";
    /** Popup on merchant's store. */
    MarketingTactic["StorefrontApp"] = "STOREFRONT_APP";
    /** A display ad. */
    MarketingTactic["Display"] = "DISPLAY";
    /** Paid search. */
    MarketingTactic["Search"] = "SEARCH";
    /** A follow-up email. */
    MarketingTactic["FollowUp"] = "FOLLOW_UP";
    /** A promotional receipt. */
    MarketingTactic["Receipt"] = "RECEIPT";
})(MarketingTactic = exports.MarketingTactic || (exports.MarketingTactic = {}));
/** The possible content types for a media object. */
var MediaContentType;
(function (MediaContentType) {
    /** A Shopify hosted video. */
    MediaContentType["Video"] = "VIDEO";
    /** An externally hosted video. */
    MediaContentType["ExternalVideo"] = "EXTERNAL_VIDEO";
    /** A 3d model. */
    MediaContentType["Model_3D"] = "MODEL_3D";
    /** A Shopify hosted image. */
    MediaContentType["Image"] = "IMAGE";
})(MediaContentType = exports.MediaContentType || (exports.MediaContentType = {}));
/** Error types for media. */
var MediaErrorCode;
(function (MediaErrorCode) {
    /** Media error has occured for unknown reason. */
    MediaErrorCode["Unknown"] = "UNKNOWN";
    /** Media could not be processed because the signed url was invalid. */
    MediaErrorCode["InvalidSignedUrl"] = "INVALID_SIGNED_URL";
    /** Media could not be processed because the image could not be downloaded. */
    MediaErrorCode["ImageDownloadFailure"] = "IMAGE_DOWNLOAD_FAILURE";
    /** Media could not be processed because the image could not be processed. */
    MediaErrorCode["ImageProcessingFailure"] = "IMAGE_PROCESSING_FAILURE";
    /** Media timed out because it is currently being modified by another operation. */
    MediaErrorCode["MediaTimeoutError"] = "MEDIA_TIMEOUT_ERROR";
    /** Media could not be created because the external video could not be found. */
    MediaErrorCode["ExternalVideoNotFound"] = "EXTERNAL_VIDEO_NOT_FOUND";
    /** Media could not be created because the external video is not listed or is private. */
    MediaErrorCode["ExternalVideoUnlisted"] = "EXTERNAL_VIDEO_UNLISTED";
    /** Media could not be created because the external video has an invalid aspect ratio. */
    MediaErrorCode["ExternalVideoInvalidAspectRatio"] = "EXTERNAL_VIDEO_INVALID_ASPECT_RATIO";
    /** Video failed validation. */
    MediaErrorCode["VideoValidationError"] = "VIDEO_VALIDATION_ERROR";
    /** Model failed validation. */
    MediaErrorCode["Model3DValidationError"] = "MODEL3D_VALIDATION_ERROR";
})(MediaErrorCode = exports.MediaErrorCode || (exports.MediaErrorCode = {}));
/** The possible statuses for a media preview image. */
var MediaPreviewImageStatus;
(function (MediaPreviewImageStatus) {
    /** Preview image is uploaded but not yet processed. */
    MediaPreviewImageStatus["Uploaded"] = "UPLOADED";
    /** Preview image is being processed. */
    MediaPreviewImageStatus["Processing"] = "PROCESSING";
    /** Preview image is ready to be displayed. */
    MediaPreviewImageStatus["Ready"] = "READY";
    /** Preview image processing has failed. */
    MediaPreviewImageStatus["Failed"] = "FAILED";
})(MediaPreviewImageStatus = exports.MediaPreviewImageStatus || (exports.MediaPreviewImageStatus = {}));
/** The possible statuses for a media object. */
var MediaStatus;
(function (MediaStatus) {
    /** Media has been uploaded but not yet processed. */
    MediaStatus["Uploaded"] = "UPLOADED";
    /** Media is being processed. */
    MediaStatus["Processing"] = "PROCESSING";
    /** Media is ready to be displayed. */
    MediaStatus["Ready"] = "READY";
    /** Media processing has failed. */
    MediaStatus["Failed"] = "FAILED";
})(MediaStatus = exports.MediaStatus || (exports.MediaStatus = {}));
/** Possible error codes that could be returned by a media mutation. */
var MediaUserErrorCode;
(function (MediaUserErrorCode) {
    /** Input value is invalid. */
    MediaUserErrorCode["Invalid"] = "INVALID";
    /** Video validation failed. */
    MediaUserErrorCode["VideoValidationError"] = "VIDEO_VALIDATION_ERROR";
    /** Model validation failed. */
    MediaUserErrorCode["Model3DValidationError"] = "MODEL3D_VALIDATION_ERROR";
    /** Video creation throttle was exceeded. */
    MediaUserErrorCode["VideoThrottleExceeded"] = "VIDEO_THROTTLE_EXCEEDED";
    /** Model3d creation throttle was exceeded. */
    MediaUserErrorCode["Model3DThrottleExceeded"] = "MODEL3D_THROTTLE_EXCEEDED";
    /** Exceeded the limit of media per product. */
    MediaUserErrorCode["ProductMediaLimitExceeded"] = "PRODUCT_MEDIA_LIMIT_EXCEEDED";
    /** Exceeded the limit of media per shop. */
    MediaUserErrorCode["ShopMediaLimitExceeded"] = "SHOP_MEDIA_LIMIT_EXCEEDED";
    /** Product does not exist. */
    MediaUserErrorCode["ProductDoesNotExist"] = "PRODUCT_DOES_NOT_EXIST";
    /** Media does not exist. */
    MediaUserErrorCode["MediaDoesNotExist"] = "MEDIA_DOES_NOT_EXIST";
    /** Media cannot be modified. It is currently being modified by another operation. */
    MediaUserErrorCode["MediaCannotBeModified"] = "MEDIA_CANNOT_BE_MODIFIED";
})(MediaUserErrorCode = exports.MediaUserErrorCode || (exports.MediaUserErrorCode = {}));
/** Metafield owner types. */
var MetafieldOwnerType;
(function (MetafieldOwnerType) {
    /** A metafield owner type. */
    MetafieldOwnerType["Article"] = "ARTICLE";
    /** A metafield owner type. */
    MetafieldOwnerType["Blog"] = "BLOG";
    /** A metafield owner type. */
    MetafieldOwnerType["Collection"] = "COLLECTION";
    /** A metafield owner type. */
    MetafieldOwnerType["Customer"] = "CUSTOMER";
    /** A metafield owner type. */
    MetafieldOwnerType["Draftorder"] = "DRAFTORDER";
    /** A metafield owner type. */
    MetafieldOwnerType["Order"] = "ORDER";
    /** A metafield owner type. */
    MetafieldOwnerType["Page"] = "PAGE";
    /** A metafield owner type. */
    MetafieldOwnerType["Product"] = "PRODUCT";
    /** A metafield owner type. */
    MetafieldOwnerType["Productimage"] = "PRODUCTIMAGE";
    /** A metafield owner type. */
    MetafieldOwnerType["Productvariant"] = "PRODUCTVARIANT";
    /** A metafield owner type. */
    MetafieldOwnerType["Shop"] = "SHOP";
})(MetafieldOwnerType = exports.MetafieldOwnerType || (exports.MetafieldOwnerType = {}));
/** Metafield value types. */
var MetafieldValueType;
(function (MetafieldValueType) {
    /** A string. */
    MetafieldValueType["String"] = "STRING";
    /** An integer. */
    MetafieldValueType["Integer"] = "INTEGER";
    /** A JSON string. */
    MetafieldValueType["JsonString"] = "JSON_STRING";
})(MetafieldValueType = exports.MetafieldValueType || (exports.MetafieldValueType = {}));
/** The set of valid sort keys for the MethodDefinition query. */
var MethodDefinitionSortKeys;
(function (MethodDefinitionSortKeys) {
    /** Sort by the `rate_provider_type` value. */
    MethodDefinitionSortKeys["RateProviderType"] = "RATE_PROVIDER_TYPE";
    /** Sort by the `id` value. */
    MethodDefinitionSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    MethodDefinitionSortKeys["Relevance"] = "RELEVANCE";
})(MethodDefinitionSortKeys = exports.MethodDefinitionSortKeys || (exports.MethodDefinitionSortKeys = {}));
/** Represents the reason that the order is being canceled. Valid values are: customer, fraud, inventory, declined, other. */
var OrderCancelReason;
(function (OrderCancelReason) {
    /** The customer wanted to cancel the order. */
    OrderCancelReason["Customer"] = "CUSTOMER";
    /** The order was fraudulent. */
    OrderCancelReason["Fraud"] = "FRAUD";
    /** There was insufficient inventory. */
    OrderCancelReason["Inventory"] = "INVENTORY";
    /** Payment was declined. */
    OrderCancelReason["Declined"] = "DECLINED";
    /** Some other reason not listed. */
    OrderCancelReason["Other"] = "OTHER";
})(OrderCancelReason = exports.OrderCancelReason || (exports.OrderCancelReason = {}));
/** Represents the order's current financial status. */
var OrderDisplayFinancialStatus;
(function (OrderDisplayFinancialStatus) {
    /** Displayed as **Pending**. */
    OrderDisplayFinancialStatus["Pending"] = "PENDING";
    /** Displayed as **Authorized**. */
    OrderDisplayFinancialStatus["Authorized"] = "AUTHORIZED";
    /** Displayed as **Partially paid**. */
    OrderDisplayFinancialStatus["PartiallyPaid"] = "PARTIALLY_PAID";
    /** Displayed as **Partially refunded**. */
    OrderDisplayFinancialStatus["PartiallyRefunded"] = "PARTIALLY_REFUNDED";
    /** Displayed as **Voided**. */
    OrderDisplayFinancialStatus["Voided"] = "VOIDED";
    /** Displayed as **Paid**. */
    OrderDisplayFinancialStatus["Paid"] = "PAID";
    /** Displayed as **Refunded**. */
    OrderDisplayFinancialStatus["Refunded"] = "REFUNDED";
})(OrderDisplayFinancialStatus = exports.OrderDisplayFinancialStatus || (exports.OrderDisplayFinancialStatus = {}));
/** Represents the order's current fulfillment status. Valid values are: unfulfilled, partial, fulfilled, restocked. */
var OrderDisplayFulfillmentStatus;
(function (OrderDisplayFulfillmentStatus) {
    /** Displayed as **Unfulfilled**. */
    OrderDisplayFulfillmentStatus["Unfulfilled"] = "UNFULFILLED";
    /** Displayed as **Partially fulfilled**. */
    OrderDisplayFulfillmentStatus["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
    /** Displayed as **Fulfilled**. */
    OrderDisplayFulfillmentStatus["Fulfilled"] = "FULFILLED";
    /** Displayed as **Restocked**. */
    OrderDisplayFulfillmentStatus["Restocked"] = "RESTOCKED";
    /** Displayed as **Pending fulfillment**. */
    OrderDisplayFulfillmentStatus["PendingFulfillment"] = "PENDING_FULFILLMENT";
    /** Displayed as **Open**. */
    OrderDisplayFulfillmentStatus["Open"] = "OPEN";
    /** Displayed as **In progress**. */
    OrderDisplayFulfillmentStatus["InProgress"] = "IN_PROGRESS";
})(OrderDisplayFulfillmentStatus = exports.OrderDisplayFulfillmentStatus || (exports.OrderDisplayFulfillmentStatus = {}));
/** The likelihood that an order is fraudulent. */
var OrderRiskLevel;
(function (OrderRiskLevel) {
    /** There is a low level of risk that this order is fraudulent. */
    OrderRiskLevel["Low"] = "LOW";
    /** There is a medium level of risk that this order is fraudulent. */
    OrderRiskLevel["Medium"] = "MEDIUM";
    /** There is a high level of risk that this order is fraudulent. */
    OrderRiskLevel["High"] = "HIGH";
})(OrderRiskLevel = exports.OrderRiskLevel || (exports.OrderRiskLevel = {}));
/** The set of valid sort keys for the Order query. */
var OrderSortKeys;
(function (OrderSortKeys) {
    /** Sort by the `created_at` value. */
    OrderSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `customer_name` value. */
    OrderSortKeys["CustomerName"] = "CUSTOMER_NAME";
    /** Sort by the `financial_status` value. */
    OrderSortKeys["FinancialStatus"] = "FINANCIAL_STATUS";
    /** Sort by the `fulfillment_status` value. */
    OrderSortKeys["FulfillmentStatus"] = "FULFILLMENT_STATUS";
    /** Sort by the `order_number` value. */
    OrderSortKeys["OrderNumber"] = "ORDER_NUMBER";
    /** Sort by the `processed_at` value. */
    OrderSortKeys["ProcessedAt"] = "PROCESSED_AT";
    /** Sort by the `total_price` value. */
    OrderSortKeys["TotalPrice"] = "TOTAL_PRICE";
    /** Sort by the `updated_at` value. */
    OrderSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `id` value. */
    OrderSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    OrderSortKeys["Relevance"] = "RELEVANCE";
})(OrderSortKeys = exports.OrderSortKeys || (exports.OrderSortKeys = {}));
/** A standardized error code, independent of the payment provider. */
var OrderTransactionErrorCode;
(function (OrderTransactionErrorCode) {
    /** The card number is incorrect. */
    OrderTransactionErrorCode["IncorrectNumber"] = "INCORRECT_NUMBER";
    /** The format of the card number is incorrect. */
    OrderTransactionErrorCode["InvalidNumber"] = "INVALID_NUMBER";
    /** The format of the expiry date is incorrect. */
    OrderTransactionErrorCode["InvalidExpiryDate"] = "INVALID_EXPIRY_DATE";
    /** The format of the CVC is incorrect. */
    OrderTransactionErrorCode["InvalidCvc"] = "INVALID_CVC";
    /** The card is expired. */
    OrderTransactionErrorCode["ExpiredCard"] = "EXPIRED_CARD";
    /** The CVC does not match the card number. */
    OrderTransactionErrorCode["IncorrectCvc"] = "INCORRECT_CVC";
    /** The ZIP or postal code does not match the card number. */
    OrderTransactionErrorCode["IncorrectZip"] = "INCORRECT_ZIP";
    /** The address does not match the card number. */
    OrderTransactionErrorCode["IncorrectAddress"] = "INCORRECT_ADDRESS";
    /** The entered PIN is incorrect. */
    OrderTransactionErrorCode["IncorrectPin"] = "INCORRECT_PIN";
    /** The card was declined. */
    OrderTransactionErrorCode["CardDeclined"] = "CARD_DECLINED";
    /** There was an error while processing the payment. */
    OrderTransactionErrorCode["ProcessingError"] = "PROCESSING_ERROR";
    /** Call the card issuer. */
    OrderTransactionErrorCode["CallIssuer"] = "CALL_ISSUER";
    /**
     * The card has been reported as lost or stolen, and the card issuer has
     * requested that the merchant keep the card and call the number on the back.
     */
    OrderTransactionErrorCode["PickUpCard"] = "PICK_UP_CARD";
    /** There is an error in the gateway or merchant configuration. */
    OrderTransactionErrorCode["ConfigError"] = "CONFIG_ERROR";
    /** A real card was used but the gateway was in test mode. */
    OrderTransactionErrorCode["TestModeLiveCard"] = "TEST_MODE_LIVE_CARD";
    /** The gateway or merchant configuration doesn't support a feature, such as network tokenization. */
    OrderTransactionErrorCode["UnsupportedFeature"] = "UNSUPPORTED_FEATURE";
    /** There was an unknown error with processing the payment. */
    OrderTransactionErrorCode["GenericError"] = "GENERIC_ERROR";
    /** The payment method is not available in the customer's country. */
    OrderTransactionErrorCode["InvalidCountry"] = "INVALID_COUNTRY";
    /** The amount is either too high or too low for the provider. */
    OrderTransactionErrorCode["InvalidAmount"] = "INVALID_AMOUNT";
    /** The payment method is momentarily unavailable. */
    OrderTransactionErrorCode["PaymentMethodUnavailable"] = "PAYMENT_METHOD_UNAVAILABLE";
    /** The payment method was invalid. */
    OrderTransactionErrorCode["AmazonPaymentsInvalidPaymentMethod"] = "AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD";
    /** The maximum amount has been captured. */
    OrderTransactionErrorCode["AmazonPaymentsMaxAmountCharged"] = "AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED";
    /** The maximum amount has been refunded. */
    OrderTransactionErrorCode["AmazonPaymentsMaxAmountRefunded"] = "AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED";
    /** The maximum of 10 authorizations has been captured for an order. */
    OrderTransactionErrorCode["AmazonPaymentsMaxAuthorizationsCaptured"] = "AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED";
    /** The maximum of 10 refunds has been processed for an order. */
    OrderTransactionErrorCode["AmazonPaymentsMaxRefundsProcessed"] = "AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED";
    /** The order was canceled, which canceled all open authorizations. */
    OrderTransactionErrorCode["AmazonPaymentsOrderReferenceCanceled"] = "AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED";
    /** The order was not confirmed within three hours. */
    OrderTransactionErrorCode["AmazonPaymentsStale"] = "AMAZON_PAYMENTS_STALE";
})(OrderTransactionErrorCode = exports.OrderTransactionErrorCode || (exports.OrderTransactionErrorCode = {}));
/** The different kinds of order transactions. */
var OrderTransactionKind;
(function (OrderTransactionKind) {
    /** An authorization and capture performed together in a single step. */
    OrderTransactionKind["Sale"] = "SALE";
    /** A transfer of the money that was reserved during the authorization stage. */
    OrderTransactionKind["Capture"] = "CAPTURE";
    /**
     * An amount reserved against the cardholder's funding source.
     * Money does not change hands until the authorization is captured.
     */
    OrderTransactionKind["Authorization"] = "AUTHORIZATION";
    /** A cancellation of a pending authorization or capture. */
    OrderTransactionKind["Void"] = "VOID";
    /**
     * A partial or full return of captured funds to the cardholder.
     * A refund can happen only after a capture is processed.
     */
    OrderTransactionKind["Refund"] = "REFUND";
    /** Money returned to the customer when they have paid too much. */
    OrderTransactionKind["Change"] = "CHANGE";
    /** An authorization for a payment taken with an EMV credit card reader. */
    OrderTransactionKind["EmvAuthorization"] = "EMV_AUTHORIZATION";
    /** A suggested refund transaction that can be used to create a refund. */
    OrderTransactionKind["SuggestedRefund"] = "SUGGESTED_REFUND";
})(OrderTransactionKind = exports.OrderTransactionKind || (exports.OrderTransactionKind = {}));
/** Transaction status' describe the status of a transaction. */
var OrderTransactionStatus;
(function (OrderTransactionStatus) {
    /** The transaction succeeded. */
    OrderTransactionStatus["Success"] = "SUCCESS";
    /** The transaction failed. */
    OrderTransactionStatus["Failure"] = "FAILURE";
    /** The transaction is pending. */
    OrderTransactionStatus["Pending"] = "PENDING";
    /** There was an error while processing the transaction. */
    OrderTransactionStatus["Error"] = "ERROR";
    /** Awaiting a response. */
    OrderTransactionStatus["AwaitingResponse"] = "AWAITING_RESPONSE";
    /** The transaction status is unknown. */
    OrderTransactionStatus["Unknown"] = "UNKNOWN";
})(OrderTransactionStatus = exports.OrderTransactionStatus || (exports.OrderTransactionStatus = {}));
/** List of payment methods used in Shopify. */
var PaymentMethods;
(function (PaymentMethods) {
    PaymentMethods["Visa"] = "VISA";
    PaymentMethods["Mastercard"] = "MASTERCARD";
    PaymentMethods["Discover"] = "DISCOVER";
    PaymentMethods["AmericanExpress"] = "AMERICAN_EXPRESS";
    PaymentMethods["DinersClub"] = "DINERS_CLUB";
    PaymentMethods["Jcb"] = "JCB";
    PaymentMethods["Dankort"] = "DANKORT";
    PaymentMethods["Maestro"] = "MAESTRO";
    PaymentMethods["Forbrugsforeningen"] = "FORBRUGSFORENINGEN";
    PaymentMethods["Paypal"] = "PAYPAL";
    PaymentMethods["Bogus"] = "BOGUS";
    PaymentMethods["Bitcoin"] = "BITCOIN";
    PaymentMethods["Litecoin"] = "LITECOIN";
    PaymentMethods["Dogecoin"] = "DOGECOIN";
})(PaymentMethods = exports.PaymentMethods || (exports.PaymentMethods = {}));
/** The method by which the price rule's value is allocated to its entitled items. */
var PriceRuleAllocationMethod;
(function (PriceRuleAllocationMethod) {
    /** The value will be applied to each of the entitled items. */
    PriceRuleAllocationMethod["Each"] = "EACH";
    /** The value will be applied once across the entitled items. */
    PriceRuleAllocationMethod["Across"] = "ACROSS";
})(PriceRuleAllocationMethod = exports.PriceRuleAllocationMethod || (exports.PriceRuleAllocationMethod = {}));
/** Possible error codes that could be returned by a price rule mutation. */
var PriceRuleErrorCode;
(function (PriceRuleErrorCode) {
    /** Input value is blank. */
    PriceRuleErrorCode["Blank"] = "BLANK";
    /** Input value should be equal to allowed value. */
    PriceRuleErrorCode["EqualTo"] = "EQUAL_TO";
    /** Input value should be greater than minimum allowed value. */
    PriceRuleErrorCode["GreaterThan"] = "GREATER_THAN";
    /** Input value should be greater than or equal to minimum allowed value. */
    PriceRuleErrorCode["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    /** Input value is invalid. */
    PriceRuleErrorCode["Invalid"] = "INVALID";
    /** Input value should be less than maximum allowed value. */
    PriceRuleErrorCode["LessThan"] = "LESS_THAN";
    /** Input value should be less or equal to maximum allowed value. */
    PriceRuleErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    /** Input value is already taken. */
    PriceRuleErrorCode["Taken"] = "TAKEN";
    /** Input value is too long. */
    PriceRuleErrorCode["TooLong"] = "TOO_LONG";
    /** Input value is too short. */
    PriceRuleErrorCode["TooShort"] = "TOO_SHORT";
    /** Unexpected internal error happened. */
    PriceRuleErrorCode["InternalError"] = "INTERNAL_ERROR";
    /** Too many arguments provided. */
    PriceRuleErrorCode["TooManyArguments"] = "TOO_MANY_ARGUMENTS";
    /** Missing a required argument. */
    PriceRuleErrorCode["MissingArgument"] = "MISSING_ARGUMENT";
    /** Duplicate customer prerequisite id present. */
    PriceRuleErrorCode["CustomerPrerequisiteDuplicate"] = "CUSTOMER_PREREQUISITE_DUPLICATE";
    PriceRuleErrorCode["CannotEntitleCollectionsWithProductsOrVariants"] = "CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS";
    PriceRuleErrorCode["ItemEntitlementInvalidType"] = "ITEM_ENTITLEMENT_INVALID_TYPE";
    PriceRuleErrorCode["ItemEntitlementsDuplicateCollection"] = "ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION";
    PriceRuleErrorCode["ItemEntitlementsDuplicateProduct"] = "ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT";
    PriceRuleErrorCode["ItemEntitlementsDuplicateVariant"] = "ITEM_ENTITLEMENTS_DUPLICATE_VARIANT";
    PriceRuleErrorCode["ItemEntitlementsExceededMaxCollection"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION";
    PriceRuleErrorCode["ItemEntitlementsExceededMaxProduct"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT";
    PriceRuleErrorCode["ItemEntitlementsExceededMaxVariant"] = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT";
    PriceRuleErrorCode["ItemEntitlementsInvalidCollection"] = "ITEM_ENTITLEMENTS_INVALID_COLLECTION";
    PriceRuleErrorCode["ItemEntitlementsInvalidProduct"] = "ITEM_ENTITLEMENTS_INVALID_PRODUCT";
    PriceRuleErrorCode["ItemEntitlementsInvalidTargetTypeOrSelection"] = "ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION";
    PriceRuleErrorCode["ItemEntitlementsInvalidVariant"] = "ITEM_ENTITLEMENTS_INVALID_VARIANT";
    PriceRuleErrorCode["ItemEntitlementsMissing"] = "ITEM_ENTITLEMENTS_MISSING";
    PriceRuleErrorCode["VariantAlreadyEntitledThroughProduct"] = "VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT";
    PriceRuleErrorCode["CannotPrerequisiteCollectionWithProductOrVariants"] = "CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS";
    PriceRuleErrorCode["ItemPrerequisitesDuplicateCollection"] = "ITEM_PREREQUISITES_DUPLICATE_COLLECTION";
    PriceRuleErrorCode["ItemPrerequisitesDuplicateProduct"] = "ITEM_PREREQUISITES_DUPLICATE_PRODUCT";
    PriceRuleErrorCode["ItemPrerequisitesDuplicateVariant"] = "ITEM_PREREQUISITES_DUPLICATE_VARIANT";
    PriceRuleErrorCode["ItemPrerequisitesExceededMax"] = "ITEM_PREREQUISITES_EXCEEDED_MAX";
    PriceRuleErrorCode["ItemPrerequisitesInvalidCollection"] = "ITEM_PREREQUISITES_INVALID_COLLECTION";
    PriceRuleErrorCode["ItemPrerequisitesInvalidProduct"] = "ITEM_PREREQUISITES_INVALID_PRODUCT";
    PriceRuleErrorCode["ItemPrerequisitesInvalidType"] = "ITEM_PREREQUISITES_INVALID_TYPE";
    PriceRuleErrorCode["ItemPrerequisitesInvalidVariant"] = "ITEM_PREREQUISITES_INVALID_VARIANT";
    PriceRuleErrorCode["ItemPrerequisitesMissing"] = "ITEM_PREREQUISITES_MISSING";
    PriceRuleErrorCode["ItemPrerequisitesMustBeEmpty"] = "ITEM_PREREQUISITES_MUST_BE_EMPTY";
    PriceRuleErrorCode["InvalidTargetTypePrerequisiteShippingPriceRange"] = "INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE";
    PriceRuleErrorCode["ShippingEntitlementsDuplicateCountry"] = "SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY";
    PriceRuleErrorCode["ShippingEntitlementsExceededMax"] = "SHIPPING_ENTITLEMENTS_EXCEEDED_MAX";
    PriceRuleErrorCode["ShippingEntitlementsInvalidCountry"] = "SHIPPING_ENTITLEMENTS_INVALID_COUNTRY";
    PriceRuleErrorCode["ShippingEntitlementsInvalidTargetTypeOrSelection"] = "SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION";
    PriceRuleErrorCode["ShippingEntitlementsMissing"] = "SHIPPING_ENTITLEMENTS_MISSING";
    PriceRuleErrorCode["ShippingEntitlementsUnsupportedDestinationType"] = "SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE";
    PriceRuleErrorCode["BothCustomerAndSavedSearchPrerequisitesSelected"] = "BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED";
    PriceRuleErrorCode["CustomerPrerequisitesExceededMax"] = "CUSTOMER_PREREQUISITES_EXCEEDED_MAX";
    PriceRuleErrorCode["CustomerPrerequisitesInvalidSelection"] = "CUSTOMER_PREREQUISITES_INVALID_SELECTION";
    PriceRuleErrorCode["CustomerPrerequisitesMissing"] = "CUSTOMER_PREREQUISITES_MISSING";
    PriceRuleErrorCode["CustomerSavedSearchDuplicate"] = "CUSTOMER_SAVED_SEARCH_DUPLICATE";
    PriceRuleErrorCode["CustomerSavedSearchExceededMax"] = "CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX";
    PriceRuleErrorCode["CustomerSavedSearchInvalid"] = "CUSTOMER_SAVED_SEARCH_INVALID";
    PriceRuleErrorCode["DiscountCodeDuplicate"] = "DISCOUNT_CODE_DUPLICATE";
    /** Exceeds maximum number allowed. */
    PriceRuleErrorCode["ExceededMax"] = "EXCEEDED_MAX";
    PriceRuleErrorCode["BogoInvalidTargetSelection"] = "BOGO_INVALID_TARGET_SELECTION";
    PriceRuleErrorCode["BogoInvalidTargetType"] = "BOGO_INVALID_TARGET_TYPE";
    PriceRuleErrorCode["BogoInvalidValueType"] = "BOGO_INVALID_VALUE_TYPE";
    PriceRuleErrorCode["AllocationMethodMustBeAcrossForGivenTargetSelection"] = "ALLOCATION_METHOD_MUST_BE_ACROSS_FOR_GIVEN_TARGET_SELECTION";
    PriceRuleErrorCode["EndDateBeforeStartDate"] = "END_DATE_BEFORE_START_DATE";
    PriceRuleErrorCode["PrerequisiteSubtotalAndQuantityRangeBothPresent"] = "PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT";
    PriceRuleErrorCode["PriceRuleAllocationLimitIsZero"] = "PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO";
    PriceRuleErrorCode["PriceRuleAllocationLimitOnNonBogo"] = "PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO";
    PriceRuleErrorCode["PriceRuleExceededMaxDiscountCode"] = "PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE";
    PriceRuleErrorCode["PriceRulePercentageValueOutsideRange"] = "PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE";
    PriceRuleErrorCode["ShopExceededMaxPriceRules"] = "SHOP_EXCEEDED_MAX_PRICE_RULES";
})(PriceRuleErrorCode = exports.PriceRuleErrorCode || (exports.PriceRuleErrorCode = {}));
/** A list of features used by the price rule. */
var PriceRuleFeature;
(function (PriceRuleFeature) {
    /** The price rule supports quantity BXGY discounts. */
    PriceRuleFeature["BuyOneGetOne"] = "BUY_ONE_GET_ONE";
    /** The price rule supports BXGY discounts using custom allocation limit. */
    PriceRuleFeature["BuyOneGetOneWithAllocationLimit"] = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT";
    /** The price rule supports bulk discounts. */
    PriceRuleFeature["Bulk"] = "BULK";
    /** The price rule supports specific customers. */
    PriceRuleFeature["SpecificCustomers"] = "SPECIFIC_CUSTOMERS";
    /** The price rule supports quantity discounts. */
    PriceRuleFeature["QuantityDiscounts"] = "QUANTITY_DISCOUNTS";
})(PriceRuleFeature = exports.PriceRuleFeature || (exports.PriceRuleFeature = {}));
/** Page type where shareable URL lands. */
var PriceRuleShareableUrlTargetType;
(function (PriceRuleShareableUrlTargetType) {
    PriceRuleShareableUrlTargetType["Home"] = "HOME";
    PriceRuleShareableUrlTargetType["Product"] = "PRODUCT";
    PriceRuleShareableUrlTargetType["Collection"] = "COLLECTION";
})(PriceRuleShareableUrlTargetType = exports.PriceRuleShareableUrlTargetType || (exports.PriceRuleShareableUrlTargetType = {}));
/** The set of valid sort keys for the PriceRule query. */
var PriceRuleSortKeys;
(function (PriceRuleSortKeys) {
    /** Sort by the `starts_at` value. */
    PriceRuleSortKeys["StartsAt"] = "STARTS_AT";
    /** Sort by the `ends_at` value. */
    PriceRuleSortKeys["EndsAt"] = "ENDS_AT";
    /** Sort by the `title` value. */
    PriceRuleSortKeys["Title"] = "TITLE";
    /** Sort by the `created_at` value. */
    PriceRuleSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `updated_at` value. */
    PriceRuleSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `id` value. */
    PriceRuleSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    PriceRuleSortKeys["Relevance"] = "RELEVANCE";
})(PriceRuleSortKeys = exports.PriceRuleSortKeys || (exports.PriceRuleSortKeys = {}));
/** The status of the price rule. */
var PriceRuleStatus;
(function (PriceRuleStatus) {
    PriceRuleStatus["Active"] = "ACTIVE";
    PriceRuleStatus["Expired"] = "EXPIRED";
    PriceRuleStatus["Scheduled"] = "SCHEDULED";
})(PriceRuleStatus = exports.PriceRuleStatus || (exports.PriceRuleStatus = {}));
/** The type of lines (line_item or shipping_line) to which the price rule applies. */
var PriceRuleTarget;
(function (PriceRuleTarget) {
    /** The price rule applies to line items. */
    PriceRuleTarget["LineItem"] = "LINE_ITEM";
    /** The price rule applies to shipping lines. */
    PriceRuleTarget["ShippingLine"] = "SHIPPING_LINE";
})(PriceRuleTarget = exports.PriceRuleTarget || (exports.PriceRuleTarget = {}));
/** A list of features used by the price rule. */
var PriceRuleTrait;
(function (PriceRuleTrait) {
    /** The price rule supports quantity BXGY discounts. */
    PriceRuleTrait["BuyOneGetOne"] = "BUY_ONE_GET_ONE";
    /** The price rule supports BXGY discounts using custom allocation limit. */
    PriceRuleTrait["BuyOneGetOneWithAllocationLimit"] = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT";
    /** The price rule supports bulk discounts. */
    PriceRuleTrait["Bulk"] = "BULK";
    /** The price rule supports specific customers. */
    PriceRuleTrait["SpecificCustomers"] = "SPECIFIC_CUSTOMERS";
    /** The price rule supports quantity discounts. */
    PriceRuleTrait["QuantityDiscounts"] = "QUANTITY_DISCOUNTS";
})(PriceRuleTrait = exports.PriceRuleTrait || (exports.PriceRuleTrait = {}));
/** Private Metafield value types. */
var PrivateMetafieldValueType;
(function (PrivateMetafieldValueType) {
    /** A private metafield value type. */
    PrivateMetafieldValueType["String"] = "STRING";
    /** A private metafield value type. */
    PrivateMetafieldValueType["Integer"] = "INTEGER";
    /** A private metafield value type. */
    PrivateMetafieldValueType["JsonString"] = "JSON_STRING";
})(PrivateMetafieldValueType = exports.PrivateMetafieldValueType || (exports.PrivateMetafieldValueType = {}));
/** The set of valid sort keys for the ProductCollection query. */
var ProductCollectionSortKeys;
(function (ProductCollectionSortKeys) {
    /** Sort by the `title` value. */
    ProductCollectionSortKeys["Title"] = "TITLE";
    /** Sort by the `price` value. */
    ProductCollectionSortKeys["Price"] = "PRICE";
    /** Sort by the `best-selling` value. */
    ProductCollectionSortKeys["BestSelling"] = "BEST_SELLING";
    /** Sort by the `created` value. */
    ProductCollectionSortKeys["Created"] = "CREATED";
    /** Sort by the `id` value. */
    ProductCollectionSortKeys["Id"] = "ID";
    /** Sort by the `manual` value. */
    ProductCollectionSortKeys["Manual"] = "MANUAL";
    /** Sort by the `collection-default` value. */
    ProductCollectionSortKeys["CollectionDefault"] = "COLLECTION_DEFAULT";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductCollectionSortKeys["Relevance"] = "RELEVANCE";
})(ProductCollectionSortKeys = exports.ProductCollectionSortKeys || (exports.ProductCollectionSortKeys = {}));
/** The set of valid sort keys for the ProductImage query. */
var ProductImageSortKeys;
(function (ProductImageSortKeys) {
    /** Sort by the `created_at` value. */
    ProductImageSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `position` value. */
    ProductImageSortKeys["Position"] = "POSITION";
    /** Sort by the `id` value. */
    ProductImageSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductImageSortKeys["Relevance"] = "RELEVANCE";
})(ProductImageSortKeys = exports.ProductImageSortKeys || (exports.ProductImageSortKeys = {}));
/** The set of valid sort keys for the ProductMedia query. */
var ProductMediaSortKeys;
(function (ProductMediaSortKeys) {
    /** Sort by the `position` value. */
    ProductMediaSortKeys["Position"] = "POSITION";
    /** Sort by the `id` value. */
    ProductMediaSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductMediaSortKeys["Relevance"] = "RELEVANCE";
})(ProductMediaSortKeys = exports.ProductMediaSortKeys || (exports.ProductMediaSortKeys = {}));
/** The set of valid sort keys for the Product query. */
var ProductSortKeys;
(function (ProductSortKeys) {
    /** Sort by the `title` value. */
    ProductSortKeys["Title"] = "TITLE";
    /** Sort by the `product_type` value. */
    ProductSortKeys["ProductType"] = "PRODUCT_TYPE";
    /** Sort by the `vendor` value. */
    ProductSortKeys["Vendor"] = "VENDOR";
    /** Sort by the `inventory_total` value. */
    ProductSortKeys["InventoryTotal"] = "INVENTORY_TOTAL";
    /** Sort by the `updated_at` value. */
    ProductSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `created_at` value. */
    ProductSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `published_at` value. */
    ProductSortKeys["PublishedAt"] = "PUBLISHED_AT";
    /** Sort by the `id` value. */
    ProductSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductSortKeys["Relevance"] = "RELEVANCE";
})(ProductSortKeys = exports.ProductSortKeys || (exports.ProductSortKeys = {}));
/** The method of inventory tracking for a product variant. */
var ProductVariantInventoryManagement;
(function (ProductVariantInventoryManagement) {
    /** Shopify tracks this product variant's inventory. */
    ProductVariantInventoryManagement["Shopify"] = "SHOPIFY";
    /** This product variant's inventory is not tracked. */
    ProductVariantInventoryManagement["NotManaged"] = "NOT_MANAGED";
    /** A third-party fulfillment service tracks this product variant's inventory. */
    ProductVariantInventoryManagement["FulfillmentService"] = "FULFILLMENT_SERVICE";
})(ProductVariantInventoryManagement = exports.ProductVariantInventoryManagement || (exports.ProductVariantInventoryManagement = {}));
/**
 * The inventory policy for a product variant controls whether customers can continue to buy the variant when it
 * is out of stock. When the value is <code>continue</code>, customers are able to buy the variant when it's out of stock.
 * When the value is <code>deny</code>, customers can't buy the variant when it's out of stock.
 */
var ProductVariantInventoryPolicy;
(function (ProductVariantInventoryPolicy) {
    /** Stop selling a product variant when it is out of stock. */
    ProductVariantInventoryPolicy["Deny"] = "DENY";
    /** Continue selling a product variant when it is out of stock. */
    ProductVariantInventoryPolicy["Continue"] = "CONTINUE";
})(ProductVariantInventoryPolicy = exports.ProductVariantInventoryPolicy || (exports.ProductVariantInventoryPolicy = {}));
/** The set of valid sort keys for the ProductVariant query. */
var ProductVariantSortKeys;
(function (ProductVariantSortKeys) {
    /** Sort by the `title` value. */
    ProductVariantSortKeys["Title"] = "TITLE";
    /** Sort by the `name` value. */
    ProductVariantSortKeys["Name"] = "NAME";
    /** Sort by the `sku` value. */
    ProductVariantSortKeys["Sku"] = "SKU";
    /** Sort by the `inventory_quantity` value. */
    ProductVariantSortKeys["InventoryQuantity"] = "INVENTORY_QUANTITY";
    /** Sort by the `inventory_management` value. */
    ProductVariantSortKeys["InventoryManagement"] = "INVENTORY_MANAGEMENT";
    /** Sort by the `inventory_levels.available` value. */
    ProductVariantSortKeys["InventoryLevelsAvailable"] = "INVENTORY_LEVELS_AVAILABLE";
    /** Sort by the `inventory_policy` value. */
    ProductVariantSortKeys["InventoryPolicy"] = "INVENTORY_POLICY";
    /** Sort by the `full_title` value. */
    ProductVariantSortKeys["FullTitle"] = "FULL_TITLE";
    /** Sort by the `popular` value. */
    ProductVariantSortKeys["Popular"] = "POPULAR";
    /** Sort by the `position` value. */
    ProductVariantSortKeys["Position"] = "POSITION";
    /** Sort by the `id` value. */
    ProductVariantSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProductVariantSortKeys["Relevance"] = "RELEVANCE";
})(ProductVariantSortKeys = exports.ProductVariantSortKeys || (exports.ProductVariantSortKeys = {}));
/** The set of valid sort keys for the ProfileItem query. */
var ProfileItemSortKeys;
(function (ProfileItemSortKeys) {
    /** Sort by the `title` value. */
    ProfileItemSortKeys["Title"] = "TITLE";
    /** Sort by the `product_type` value. */
    ProfileItemSortKeys["ProductType"] = "PRODUCT_TYPE";
    /** Sort by the `vendor` value. */
    ProfileItemSortKeys["Vendor"] = "VENDOR";
    /** Sort by the `inventory_total` value. */
    ProfileItemSortKeys["InventoryTotal"] = "INVENTORY_TOTAL";
    /** Sort by the `updated_at` value. */
    ProfileItemSortKeys["UpdatedAt"] = "UPDATED_AT";
    /** Sort by the `created_at` value. */
    ProfileItemSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `published_at` value. */
    ProfileItemSortKeys["PublishedAt"] = "PUBLISHED_AT";
    /** Sort by the `id` value. */
    ProfileItemSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ProfileItemSortKeys["Relevance"] = "RELEVANCE";
})(ProfileItemSortKeys = exports.ProfileItemSortKeys || (exports.ProfileItemSortKeys = {}));
/** The type of refund to perform for a particular refund duty. */
var RefundDutyRefundType;
(function (RefundDutyRefundType) {
    /** The duty is proportionally refunded based on the quantity of the refunded line item. */
    RefundDutyRefundType["Proportional"] = "PROPORTIONAL";
    /** The duty is fully refunded. */
    RefundDutyRefundType["Full"] = "FULL";
})(RefundDutyRefundType = exports.RefundDutyRefundType || (exports.RefundDutyRefundType = {}));
/** The type of restock performed for a particular refund line item. */
var RefundLineItemRefundType;
(function (RefundLineItemRefundType) {
    /** Refund line item was returned. */
    RefundLineItemRefundType["Return"] = "RETURN";
    /** Refund line item was canceled. */
    RefundLineItemRefundType["Cancel"] = "CANCEL";
    /** Refund line item was restocked, without specifically being identified as a return or cancelation. */
    RefundLineItemRefundType["LegacyRestock"] = "LEGACY_RESTOCK";
    /** Refund line item was not restocked. */
    RefundLineItemRefundType["NoRestock"] = "NO_RESTOCK";
})(RefundLineItemRefundType = exports.RefundLineItemRefundType || (exports.RefundLineItemRefundType = {}));
/** The type of restock performed for a particular refund line item. */
var RefundLineItemRestockType;
(function (RefundLineItemRestockType) {
    /** Refund line item was returned. */
    RefundLineItemRestockType["Return"] = "RETURN";
    /** Refund line item was canceled. */
    RefundLineItemRestockType["Cancel"] = "CANCEL";
    /** Refund line item was restocked, without specifically being identified as a return or cancelation. */
    RefundLineItemRestockType["LegacyRestock"] = "LEGACY_RESTOCK";
    /** Refund line item was not restocked. */
    RefundLineItemRestockType["NoRestock"] = "NO_RESTOCK";
})(RefundLineItemRestockType = exports.RefundLineItemRestockType || (exports.RefundLineItemRestockType = {}));
/** The available icons for resource alerts. */
var ResourceAlertIcon;
(function (ResourceAlertIcon) {
    /** A checkmark inside a circle. */
    ResourceAlertIcon["CheckmarkCircle"] = "CHECKMARK_CIRCLE";
    /** A lowercase `i` inside a circle. */
    ResourceAlertIcon["InformationCircle"] = "INFORMATION_CIRCLE";
})(ResourceAlertIcon = exports.ResourceAlertIcon || (exports.ResourceAlertIcon = {}));
/** The possible severity levels for a resource alert. */
var ResourceAlertSeverity;
(function (ResourceAlertSeverity) {
    /** Indicates a neutral alert. */
    ResourceAlertSeverity["Default"] = "DEFAULT";
    /** Indicates an informative alert. */
    ResourceAlertSeverity["Info"] = "INFO";
    /** Indicates a warning alert. */
    ResourceAlertSeverity["Warning"] = "WARNING";
    /** Indicates a success alert. */
    ResourceAlertSeverity["Success"] = "SUCCESS";
    /** Indicates a critical alert. */
    ResourceAlertSeverity["Critical"] = "CRITICAL";
    ResourceAlertSeverity["Error"] = "ERROR";
})(ResourceAlertSeverity = exports.ResourceAlertSeverity || (exports.ResourceAlertSeverity = {}));
/** The page or pages on the online store where the script should be included. */
var ScriptTagDisplayScope;
(function (ScriptTagDisplayScope) {
    /** Include the script on both the web storefront and the order status page. */
    ScriptTagDisplayScope["All"] = "ALL";
    /** Include the script only on the order status page. */
    ScriptTagDisplayScope["OrderStatus"] = "ORDER_STATUS";
    /** Include the script only on the web storefront. */
    ScriptTagDisplayScope["OnlineStore"] = "ONLINE_STORE";
})(ScriptTagDisplayScope = exports.ScriptTagDisplayScope || (exports.ScriptTagDisplayScope = {}));
/** Specifies the type of resources to be returned from a search. */
var SearchResultType;
(function (SearchResultType) {
    SearchResultType["Order"] = "ORDER";
    SearchResultType["Customer"] = "CUSTOMER";
    SearchResultType["Product"] = "PRODUCT";
    SearchResultType["OnlineStorePage"] = "ONLINE_STORE_PAGE";
    SearchResultType["OnlineStoreBlog"] = "ONLINE_STORE_BLOG";
    SearchResultType["OnlineStoreArticle"] = "ONLINE_STORE_ARTICLE";
    SearchResultType["Collection"] = "COLLECTION";
    SearchResultType["DraftOrder"] = "DRAFT_ORDER";
    SearchResultType["PriceRule"] = "PRICE_RULE";
})(SearchResultType = exports.SearchResultType || (exports.SearchResultType = {}));
/**
 * Possible branding of a shop.
 * Branding can be used to define the look of a shop including its styling and logo in the Shopify Admin.
 */
var ShopBranding;
(function (ShopBranding) {
    /** Shop has Shopify Gold branding. */
    ShopBranding["ShopifyGold"] = "SHOPIFY_GOLD";
    /** Shop has Shopify Plus branding. */
    ShopBranding["ShopifyPlus"] = "SHOPIFY_PLUS";
    /** Shop has Rogers branding. */
    ShopBranding["Rogers"] = "ROGERS";
    /** Shop has Shopify branding. */
    ShopBranding["Shopify"] = "SHOPIFY";
})(ShopBranding = exports.ShopBranding || (exports.ShopBranding = {}));
/** Represents the shop's customer account requirement preference. */
var ShopCustomerAccountsSetting;
(function (ShopCustomerAccountsSetting) {
    ShopCustomerAccountsSetting["Required"] = "REQUIRED";
    ShopCustomerAccountsSetting["Optional"] = "OPTIONAL";
    ShopCustomerAccountsSetting["Disabled"] = "DISABLED";
})(ShopCustomerAccountsSetting = exports.ShopCustomerAccountsSetting || (exports.ShopCustomerAccountsSetting = {}));
/** The bank account status. */
var ShopifyPaymentsBankAccountStatus;
(function (ShopifyPaymentsBankAccountStatus) {
    /** A bank account that hasn't had any activity and that's not validated. */
    ShopifyPaymentsBankAccountStatus["New"] = "NEW";
    /** It was determined that the bank account exists. */
    ShopifyPaymentsBankAccountStatus["Validated"] = "VALIDATED";
    /** Bank account validation was successful. */
    ShopifyPaymentsBankAccountStatus["Verified"] = "VERIFIED";
    /** A payout to the bank account failed. */
    ShopifyPaymentsBankAccountStatus["Errored"] = "ERRORED";
})(ShopifyPaymentsBankAccountStatus = exports.ShopifyPaymentsBankAccountStatus || (exports.ShopifyPaymentsBankAccountStatus = {}));
/** The reason for the dispute provided by the cardholder's bank. */
var ShopifyPaymentsDisputeReason;
(function (ShopifyPaymentsDisputeReason) {
    /** The cardholder claims that they didn’t authorize the payment. */
    ShopifyPaymentsDisputeReason["Fraudulent"] = "FRAUDULENT";
    /**
     * The dispute is uncategorized, so you should contact the customer for
     * additional details to find out why the payment was disputed.
     */
    ShopifyPaymentsDisputeReason["General"] = "GENERAL";
    /** The customer doesn’t recognize the payment appearing on their card statement. */
    ShopifyPaymentsDisputeReason["Unrecognized"] = "UNRECOGNIZED";
    /** The customer claims they were charged multiple times for the same product or service. */
    ShopifyPaymentsDisputeReason["Duplicate"] = "DUPLICATE";
    /** The customer claims that you continued to charge them after a subscription was canceled. */
    ShopifyPaymentsDisputeReason["SubscriptionCancelled"] = "SUBSCRIPTION_CANCELLED";
    /** The product or service was received but was defective, damaged, or not as described. */
    ShopifyPaymentsDisputeReason["ProductUnacceptable"] = "PRODUCT_UNACCEPTABLE";
    /** The customer claims they did not receive the products or services purchased. */
    ShopifyPaymentsDisputeReason["ProductNotReceived"] = "PRODUCT_NOT_RECEIVED";
    /**
     * The customer claims that the purchased product was returned or the transaction
     * was otherwise canceled, but you have not yet provided a refund or credit.
     */
    ShopifyPaymentsDisputeReason["CreditNotProcessed"] = "CREDIT_NOT_PROCESSED";
    /** The customer account associated with the purchase is incorrect. */
    ShopifyPaymentsDisputeReason["IncorrectAccountDetails"] = "INCORRECT_ACCOUNT_DETAILS";
    /** The customer's bank account has insufficient funds. */
    ShopifyPaymentsDisputeReason["InsufficientFunds"] = "INSUFFICIENT_FUNDS";
    /** The customer's bank cannot process the charge. */
    ShopifyPaymentsDisputeReason["BankCannotProcess"] = "BANK_CANNOT_PROCESS";
    /** The customer's bank cannot proceed with the debit since it has not been authorized. */
    ShopifyPaymentsDisputeReason["DebitNotAuthorized"] = "DEBIT_NOT_AUTHORIZED";
    /**
     * The customer initiated the dispute, so you should contact the customer for
     * additional details to find out why the payment was disputed.
     */
    ShopifyPaymentsDisputeReason["CustomerInitiated"] = "CUSTOMER_INITIATED";
})(ShopifyPaymentsDisputeReason = exports.ShopifyPaymentsDisputeReason || (exports.ShopifyPaymentsDisputeReason = {}));
/** The interval at which payouts are sent to the connected bank account. */
var ShopifyPaymentsPayoutInterval;
(function (ShopifyPaymentsPayoutInterval) {
    /** Each business day. */
    ShopifyPaymentsPayoutInterval["Daily"] = "DAILY";
    /** Each week, on the day of week specified by weeklyAnchor. */
    ShopifyPaymentsPayoutInterval["Weekly"] = "WEEKLY";
    /** Each month, on the day of month specified by monthlyAnchor. */
    ShopifyPaymentsPayoutInterval["Monthly"] = "MONTHLY";
    /** Payouts will not be automatically made. */
    ShopifyPaymentsPayoutInterval["Manual"] = "MANUAL";
})(ShopifyPaymentsPayoutInterval = exports.ShopifyPaymentsPayoutInterval || (exports.ShopifyPaymentsPayoutInterval = {}));
/** The transfer status of the payout. */
var ShopifyPaymentsPayoutStatus;
(function (ShopifyPaymentsPayoutStatus) {
    /**
     * The payout has been created and had transactions assigned to it, but
     * it has not yet been submitted to the bank.
     */
    ShopifyPaymentsPayoutStatus["Scheduled"] = "SCHEDULED";
    /** The payout has been submitted to the bank. */
    ShopifyPaymentsPayoutStatus["InTransit"] = "IN_TRANSIT";
    /** The payout has been successfully deposited into the bank. */
    ShopifyPaymentsPayoutStatus["Paid"] = "PAID";
    /** The payout has been declined by the bank. */
    ShopifyPaymentsPayoutStatus["Failed"] = "FAILED";
    /** The payout has been canceled by Shopify. */
    ShopifyPaymentsPayoutStatus["Canceled"] = "CANCELED";
})(ShopifyPaymentsPayoutStatus = exports.ShopifyPaymentsPayoutStatus || (exports.ShopifyPaymentsPayoutStatus = {}));
/** The possible transaction types for a payout. */
var ShopifyPaymentsPayoutTransactionType;
(function (ShopifyPaymentsPayoutTransactionType) {
    /** The payout is a deposit. */
    ShopifyPaymentsPayoutTransactionType["Deposit"] = "DEPOSIT";
    /** The payout is a withdrawal. */
    ShopifyPaymentsPayoutTransactionType["Withdrawal"] = "WITHDRAWAL";
})(ShopifyPaymentsPayoutTransactionType = exports.ShopifyPaymentsPayoutTransactionType || (exports.ShopifyPaymentsPayoutTransactionType = {}));
/** The types of possible verification documents. */
var ShopifyPaymentsVerificationDocumentType;
(function (ShopifyPaymentsVerificationDocumentType) {
    /** The subject's driver's license. */
    ShopifyPaymentsVerificationDocumentType["DriversLicense"] = "DRIVERS_LICENSE";
    /** A government's identification document of the subject. */
    ShopifyPaymentsVerificationDocumentType["GovernmentIdentification"] = "GOVERNMENT_IDENTIFICATION";
    /** The subject's passport. */
    ShopifyPaymentsVerificationDocumentType["Passport"] = "PASSPORT";
})(ShopifyPaymentsVerificationDocumentType = exports.ShopifyPaymentsVerificationDocumentType || (exports.ShopifyPaymentsVerificationDocumentType = {}));
/** The status of a verification. */
var ShopifyPaymentsVerificationStatus;
(function (ShopifyPaymentsVerificationStatus) {
    /** The verification has been verified. */
    ShopifyPaymentsVerificationStatus["Verified"] = "VERIFIED";
    /** The verification has not yet been verified. */
    ShopifyPaymentsVerificationStatus["Unverified"] = "UNVERIFIED";
    /** The verification request has been submitted but a response has not yet been given. */
    ShopifyPaymentsVerificationStatus["Pending"] = "PENDING";
})(ShopifyPaymentsVerificationStatus = exports.ShopifyPaymentsVerificationStatus || (exports.ShopifyPaymentsVerificationStatus = {}));
/** The set of valid sort keys for the ShopImage query. */
var ShopImageSortKeys;
(function (ShopImageSortKeys) {
    /** Sort by the `created_at` value. */
    ShopImageSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    ShopImageSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    ShopImageSortKeys["Relevance"] = "RELEVANCE";
})(ShopImageSortKeys = exports.ShopImageSortKeys || (exports.ShopImageSortKeys = {}));
/** Possible sort of tags. */
var ShopTagSort;
(function (ShopTagSort) {
    /** Alphabetical sort. */
    ShopTagSort["Alphabetical"] = "ALPHABETICAL";
    /** Popularity sort. */
    ShopTagSort["Popular"] = "POPULAR";
})(ShopTagSort = exports.ShopTagSort || (exports.ShopTagSort = {}));
/** Possible HTTP method of a staged upload target. */
var StagedUploadHttpMethodType;
(function (StagedUploadHttpMethodType) {
    /** The POST HTTP method. */
    StagedUploadHttpMethodType["Post"] = "POST";
    /** The PUT HTTP method. */
    StagedUploadHttpMethodType["Put"] = "PUT";
})(StagedUploadHttpMethodType = exports.StagedUploadHttpMethodType || (exports.StagedUploadHttpMethodType = {}));
/** Specifies the resource type to receive. */
var StagedUploadTargetGenerateUploadResource;
(function (StagedUploadTargetGenerateUploadResource) {
    /** A timeline event. */
    StagedUploadTargetGenerateUploadResource["Timeline"] = "TIMELINE";
    /** A product image. */
    StagedUploadTargetGenerateUploadResource["ProductImage"] = "PRODUCT_IMAGE";
    /** A collection image. */
    StagedUploadTargetGenerateUploadResource["CollectionImage"] = "COLLECTION_IMAGE";
    /** A shop image. */
    StagedUploadTargetGenerateUploadResource["ShopImage"] = "SHOP_IMAGE";
    /** Merchandising::Video resource representation. */
    StagedUploadTargetGenerateUploadResource["Video"] = "VIDEO";
    /** Merchandising::Model3d resource representation. */
    StagedUploadTargetGenerateUploadResource["Model_3D"] = "MODEL_3D";
    /** Merchandising::Image resource representation. */
    StagedUploadTargetGenerateUploadResource["Image"] = "IMAGE";
})(StagedUploadTargetGenerateUploadResource = exports.StagedUploadTargetGenerateUploadResource || (exports.StagedUploadTargetGenerateUploadResource = {}));
/** Specifies the kind of the suggested order transaction. */
var SuggestedOrderTransactionKind;
(function (SuggestedOrderTransactionKind) {
    /** A suggested refund transaction for an order. */
    SuggestedOrderTransactionKind["SuggestedRefund"] = "SUGGESTED_REFUND";
})(SuggestedOrderTransactionKind = exports.SuggestedOrderTransactionKind || (exports.SuggestedOrderTransactionKind = {}));
/** Available customer tax exemptions. */
var TaxExemption;
(function (TaxExemption) {
    /** This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada. */
    TaxExemption["CaStatusCardExemption"] = "CA_STATUS_CARD_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia. */
    TaxExemption["CaBcResellerExemption"] = "CA_BC_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba. */
    TaxExemption["CaMbResellerExemption"] = "CA_MB_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkResellerExemption"] = "CA_SK_RESELLER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada. */
    TaxExemption["CaDiplomatExemption"] = "CA_DIPLOMAT_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia. */
    TaxExemption["CaBcCommercialFisheryExemption"] = "CA_BC_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba. */
    TaxExemption["CaMbCommercialFisheryExemption"] = "CA_MB_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia. */
    TaxExemption["CaNsCommercialFisheryExemption"] = "CA_NS_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island. */
    TaxExemption["CaPeCommercialFisheryExemption"] = "CA_PE_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkCommercialFisheryExemption"] = "CA_SK_COMMERCIAL_FISHERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia. */
    TaxExemption["CaBcProductionAndMachineryExemption"] = "CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkProductionAndMachineryExemption"] = "CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia. */
    TaxExemption["CaBcSubContractorExemption"] = "CA_BC_SUB_CONTRACTOR_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkSubContractorExemption"] = "CA_SK_SUB_CONTRACTOR_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia. */
    TaxExemption["CaBcContractorExemption"] = "CA_BC_CONTRACTOR_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkContractorExemption"] = "CA_SK_CONTRACTOR_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario. */
    TaxExemption["CaOnPurchaseExemption"] = "CA_ON_PURCHASE_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba. */
    TaxExemption["CaMbFarmerExemption"] = "CA_MB_FARMER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia. */
    TaxExemption["CaNsFarmerExemption"] = "CA_NS_FARMER_EXEMPTION";
    /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan. */
    TaxExemption["CaSkFarmerExemption"] = "CA_SK_FARMER_EXEMPTION";
})(TaxExemption = exports.TaxExemption || (exports.TaxExemption = {}));
/** Specifies the type of resources that are translatable. */
var TranslatableResourceType;
(function (TranslatableResourceType) {
    /** Represents a product. */
    TranslatableResourceType["Product"] = "PRODUCT";
    /** Represents a product variant. */
    TranslatableResourceType["ProductVariant"] = "PRODUCT_VARIANT";
    /** Represents an email template. */
    TranslatableResourceType["EmailTemplate"] = "EMAIL_TEMPLATE";
    /** Represents an online store theme. */
    TranslatableResourceType["OnlineStoreTheme"] = "ONLINE_STORE_THEME";
    /** Represents an article. */
    TranslatableResourceType["OnlineStoreArticle"] = "ONLINE_STORE_ARTICLE";
    /** Represents an online store blog. */
    TranslatableResourceType["OnlineStoreBlog"] = "ONLINE_STORE_BLOG";
    /** Represents an online store page. */
    TranslatableResourceType["OnlineStorePage"] = "ONLINE_STORE_PAGE";
    /** Represents a collection of products. */
    TranslatableResourceType["Collection"] = "COLLECTION";
    /** Represents a link to direct users to. */
    TranslatableResourceType["Link"] = "LINK";
    /** Represents a metafield. */
    TranslatableResourceType["Metafield"] = "METAFIELD";
    /** Represents an SMS template. */
    TranslatableResourceType["SmsTemplate"] = "SMS_TEMPLATE";
    /** Represents a shop. */
    TranslatableResourceType["Shop"] = "SHOP";
    /** Represents a shop policy. */
    TranslatableResourceType["ShopPolicy"] = "SHOP_POLICY";
    /** Represents a payment gateway. */
    TranslatableResourceType["PaymentGateway"] = "PAYMENT_GATEWAY";
    /** Represents a custom product property name like "Size", "Color", and "Material". */
    TranslatableResourceType["ProductOption"] = "PRODUCT_OPTION";
    /** Represents a delivery method definition. For example, "Standard", or "Expedited". */
    TranslatableResourceType["DeliveryMethodDefinition"] = "DELIVERY_METHOD_DEFINITION";
})(TranslatableResourceType = exports.TranslatableResourceType || (exports.TranslatableResourceType = {}));
/** Possible error codes that could be returned by a translation mutation. */
var TranslationErrorCode;
(function (TranslationErrorCode) {
    /** Input value is blank. */
    TranslationErrorCode["Blank"] = "BLANK";
    /** Input value is invalid. */
    TranslationErrorCode["Invalid"] = "INVALID";
    /** Resource does not exist. */
    TranslationErrorCode["ResourceNotFound"] = "RESOURCE_NOT_FOUND";
    /** Too many translation keys for resource. */
    TranslationErrorCode["TooManyKeysForResource"] = "TOO_MANY_KEYS_FOR_RESOURCE";
    /** Translation key is invalid. */
    TranslationErrorCode["InvalidKeyForModel"] = "INVALID_KEY_FOR_MODEL";
    /** Translation value is invalid. */
    TranslationErrorCode["FailsResourceValidation"] = "FAILS_RESOURCE_VALIDATION";
    /** Translatable content is invalid. */
    TranslationErrorCode["InvalidTranslatableContent"] = "INVALID_TRANSLATABLE_CONTENT";
    /** Locale is invalid for the shop. */
    TranslationErrorCode["InvalidLocaleForShop"] = "INVALID_LOCALE_FOR_SHOP";
    /** Locale language code is invalid. */
    TranslationErrorCode["InvalidCode"] = "INVALID_CODE";
    /** Locale code format is invalid. */
    TranslationErrorCode["InvalidFormat"] = "INVALID_FORMAT";
})(TranslationErrorCode = exports.TranslationErrorCode || (exports.TranslationErrorCode = {}));
/** Systems of weights and measures. */
var UnitSystem;
(function (UnitSystem) {
    /** Imperial system of weights and measures. */
    UnitSystem["ImperialSystem"] = "IMPERIAL_SYSTEM";
    /** Metric system of weights and measures. */
    UnitSystem["MetricSystem"] = "METRIC_SYSTEM";
})(UnitSystem = exports.UnitSystem || (exports.UnitSystem = {}));
/** The supported formats for webhook subscriptions. */
var WebhookSubscriptionFormat;
(function (WebhookSubscriptionFormat) {
    WebhookSubscriptionFormat["Json"] = "JSON";
    WebhookSubscriptionFormat["Xml"] = "XML";
})(WebhookSubscriptionFormat = exports.WebhookSubscriptionFormat || (exports.WebhookSubscriptionFormat = {}));
/** The set of valid sort keys for the WebhookSubscription query. */
var WebhookSubscriptionSortKeys;
(function (WebhookSubscriptionSortKeys) {
    /** Sort by the `created_at` value. */
    WebhookSubscriptionSortKeys["CreatedAt"] = "CREATED_AT";
    /** Sort by the `id` value. */
    WebhookSubscriptionSortKeys["Id"] = "ID";
    /**
     * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
     * results by relevance to the search term(s). When no search query is specified, this sort key is not
     * deterministic and should not be used.
     */
    WebhookSubscriptionSortKeys["Relevance"] = "RELEVANCE";
})(WebhookSubscriptionSortKeys = exports.WebhookSubscriptionSortKeys || (exports.WebhookSubscriptionSortKeys = {}));
/** The supported topics for webhook subscriptions. */
var WebhookSubscriptionTopic;
(function (WebhookSubscriptionTopic) {
    /** The webhook topic for `app/uninstalled` events. */
    WebhookSubscriptionTopic["AppUninstalled"] = "APP_UNINSTALLED";
    /** The webhook topic for `carts/create` events. */
    WebhookSubscriptionTopic["CartsCreate"] = "CARTS_CREATE";
    /** The webhook topic for `carts/update` events. */
    WebhookSubscriptionTopic["CartsUpdate"] = "CARTS_UPDATE";
    /** The webhook topic for `channels/delete` events. */
    WebhookSubscriptionTopic["ChannelsDelete"] = "CHANNELS_DELETE";
    /** The webhook topic for `checkouts/create` events. */
    WebhookSubscriptionTopic["CheckoutsCreate"] = "CHECKOUTS_CREATE";
    /** The webhook topic for `checkouts/delete` events. */
    WebhookSubscriptionTopic["CheckoutsDelete"] = "CHECKOUTS_DELETE";
    /** The webhook topic for `checkouts/update` events. */
    WebhookSubscriptionTopic["CheckoutsUpdate"] = "CHECKOUTS_UPDATE";
    /** The webhook topic for `collection_listings/add` events. */
    WebhookSubscriptionTopic["CollectionListingsAdd"] = "COLLECTION_LISTINGS_ADD";
    /** The webhook topic for `collection_listings/remove` events. */
    WebhookSubscriptionTopic["CollectionListingsRemove"] = "COLLECTION_LISTINGS_REMOVE";
    /** The webhook topic for `collection_listings/update` events. */
    WebhookSubscriptionTopic["CollectionListingsUpdate"] = "COLLECTION_LISTINGS_UPDATE";
    /** The webhook topic for `collection_publications/create` events. */
    WebhookSubscriptionTopic["CollectionPublicationsCreate"] = "COLLECTION_PUBLICATIONS_CREATE";
    /** The webhook topic for `collection_publications/delete` events. */
    WebhookSubscriptionTopic["CollectionPublicationsDelete"] = "COLLECTION_PUBLICATIONS_DELETE";
    /** The webhook topic for `collection_publications/update` events. */
    WebhookSubscriptionTopic["CollectionPublicationsUpdate"] = "COLLECTION_PUBLICATIONS_UPDATE";
    /** The webhook topic for `collections/create` events. */
    WebhookSubscriptionTopic["CollectionsCreate"] = "COLLECTIONS_CREATE";
    /** The webhook topic for `collections/delete` events. */
    WebhookSubscriptionTopic["CollectionsDelete"] = "COLLECTIONS_DELETE";
    /** The webhook topic for `collections/update` events. */
    WebhookSubscriptionTopic["CollectionsUpdate"] = "COLLECTIONS_UPDATE";
    /** The webhook topic for `customer_groups/create` events. */
    WebhookSubscriptionTopic["CustomerGroupsCreate"] = "CUSTOMER_GROUPS_CREATE";
    /** The webhook topic for `customer_groups/delete` events. */
    WebhookSubscriptionTopic["CustomerGroupsDelete"] = "CUSTOMER_GROUPS_DELETE";
    /** The webhook topic for `customer_groups/update` events. */
    WebhookSubscriptionTopic["CustomerGroupsUpdate"] = "CUSTOMER_GROUPS_UPDATE";
    /** The webhook topic for `customers/create` events. */
    WebhookSubscriptionTopic["CustomersCreate"] = "CUSTOMERS_CREATE";
    /** The webhook topic for `customers/delete` events. */
    WebhookSubscriptionTopic["CustomersDelete"] = "CUSTOMERS_DELETE";
    /** The webhook topic for `customers/disable` events. */
    WebhookSubscriptionTopic["CustomersDisable"] = "CUSTOMERS_DISABLE";
    /** The webhook topic for `customers/enable` events. */
    WebhookSubscriptionTopic["CustomersEnable"] = "CUSTOMERS_ENABLE";
    /** The webhook topic for `customers/update` events. */
    WebhookSubscriptionTopic["CustomersUpdate"] = "CUSTOMERS_UPDATE";
    /** The webhook topic for `disputes/create` events. */
    WebhookSubscriptionTopic["DisputesCreate"] = "DISPUTES_CREATE";
    /** The webhook topic for `disputes/update` events. */
    WebhookSubscriptionTopic["DisputesUpdate"] = "DISPUTES_UPDATE";
    /** The webhook topic for `draft_orders/create` events. */
    WebhookSubscriptionTopic["DraftOrdersCreate"] = "DRAFT_ORDERS_CREATE";
    /** The webhook topic for `draft_orders/delete` events. */
    WebhookSubscriptionTopic["DraftOrdersDelete"] = "DRAFT_ORDERS_DELETE";
    /** The webhook topic for `draft_orders/update` events. */
    WebhookSubscriptionTopic["DraftOrdersUpdate"] = "DRAFT_ORDERS_UPDATE";
    /** The webhook topic for `fulfillment_events/create` events. */
    WebhookSubscriptionTopic["FulfillmentEventsCreate"] = "FULFILLMENT_EVENTS_CREATE";
    /** The webhook topic for `fulfillment_events/delete` events. */
    WebhookSubscriptionTopic["FulfillmentEventsDelete"] = "FULFILLMENT_EVENTS_DELETE";
    /** The webhook topic for `fulfillments/create` events. */
    WebhookSubscriptionTopic["FulfillmentsCreate"] = "FULFILLMENTS_CREATE";
    /** The webhook topic for `fulfillments/update` events. */
    WebhookSubscriptionTopic["FulfillmentsUpdate"] = "FULFILLMENTS_UPDATE";
    /** The webhook topic for `attributed_sessions/first` events. */
    WebhookSubscriptionTopic["AttributedSessionsFirst"] = "ATTRIBUTED_SESSIONS_FIRST";
    /** The webhook topic for `attributed_sessions/last` events. */
    WebhookSubscriptionTopic["AttributedSessionsLast"] = "ATTRIBUTED_SESSIONS_LAST";
    /** The webhook topic for `order_transactions/create` events. */
    WebhookSubscriptionTopic["OrderTransactionsCreate"] = "ORDER_TRANSACTIONS_CREATE";
    /** The webhook topic for `orders/cancelled` events. */
    WebhookSubscriptionTopic["OrdersCancelled"] = "ORDERS_CANCELLED";
    /** The webhook topic for `orders/create` events. */
    WebhookSubscriptionTopic["OrdersCreate"] = "ORDERS_CREATE";
    /** The webhook topic for `orders/delete` events. */
    WebhookSubscriptionTopic["OrdersDelete"] = "ORDERS_DELETE";
    /** The webhook topic for `orders/edited` events. */
    WebhookSubscriptionTopic["OrdersEdited"] = "ORDERS_EDITED";
    /** The webhook topic for `orders/fulfilled` events. */
    WebhookSubscriptionTopic["OrdersFulfilled"] = "ORDERS_FULFILLED";
    /** The webhook topic for `orders/paid` events. */
    WebhookSubscriptionTopic["OrdersPaid"] = "ORDERS_PAID";
    /** The webhook topic for `orders/partially_fulfilled` events. */
    WebhookSubscriptionTopic["OrdersPartiallyFulfilled"] = "ORDERS_PARTIALLY_FULFILLED";
    /** The webhook topic for `orders/updated` events. */
    WebhookSubscriptionTopic["OrdersUpdated"] = "ORDERS_UPDATED";
    /** The webhook topic for `product_listings/add` events. */
    WebhookSubscriptionTopic["ProductListingsAdd"] = "PRODUCT_LISTINGS_ADD";
    /** The webhook topic for `product_listings/remove` events. */
    WebhookSubscriptionTopic["ProductListingsRemove"] = "PRODUCT_LISTINGS_REMOVE";
    /** The webhook topic for `product_listings/update` events. */
    WebhookSubscriptionTopic["ProductListingsUpdate"] = "PRODUCT_LISTINGS_UPDATE";
    /** The webhook topic for `product_publications/create` events. */
    WebhookSubscriptionTopic["ProductPublicationsCreate"] = "PRODUCT_PUBLICATIONS_CREATE";
    /** The webhook topic for `product_publications/delete` events. */
    WebhookSubscriptionTopic["ProductPublicationsDelete"] = "PRODUCT_PUBLICATIONS_DELETE";
    /** The webhook topic for `product_publications/update` events. */
    WebhookSubscriptionTopic["ProductPublicationsUpdate"] = "PRODUCT_PUBLICATIONS_UPDATE";
    /** The webhook topic for `products/create` events. */
    WebhookSubscriptionTopic["ProductsCreate"] = "PRODUCTS_CREATE";
    /** The webhook topic for `products/delete` events. */
    WebhookSubscriptionTopic["ProductsDelete"] = "PRODUCTS_DELETE";
    /** The webhook topic for `products/update` events. */
    WebhookSubscriptionTopic["ProductsUpdate"] = "PRODUCTS_UPDATE";
    /** The webhook topic for `refunds/create` events. */
    WebhookSubscriptionTopic["RefundsCreate"] = "REFUNDS_CREATE";
    /** The webhook topic for `shipping_addresses/create` events. */
    WebhookSubscriptionTopic["ShippingAddressesCreate"] = "SHIPPING_ADDRESSES_CREATE";
    /** The webhook topic for `shipping_addresses/update` events. */
    WebhookSubscriptionTopic["ShippingAddressesUpdate"] = "SHIPPING_ADDRESSES_UPDATE";
    /** The webhook topic for `shop/update` events. */
    WebhookSubscriptionTopic["ShopUpdate"] = "SHOP_UPDATE";
    /** The webhook topic for `tax_services/create` events. */
    WebhookSubscriptionTopic["TaxServicesCreate"] = "TAX_SERVICES_CREATE";
    /** The webhook topic for `tax_services/update` events. */
    WebhookSubscriptionTopic["TaxServicesUpdate"] = "TAX_SERVICES_UPDATE";
    /** The webhook topic for `themes/create` events. */
    WebhookSubscriptionTopic["ThemesCreate"] = "THEMES_CREATE";
    /** The webhook topic for `themes/delete` events. */
    WebhookSubscriptionTopic["ThemesDelete"] = "THEMES_DELETE";
    /** The webhook topic for `themes/publish` events. */
    WebhookSubscriptionTopic["ThemesPublish"] = "THEMES_PUBLISH";
    /** The webhook topic for `themes/update` events. */
    WebhookSubscriptionTopic["ThemesUpdate"] = "THEMES_UPDATE";
    /** The webhook topic for `variants/in_stock` events. */
    WebhookSubscriptionTopic["VariantsInStock"] = "VARIANTS_IN_STOCK";
    /** The webhook topic for `variants/out_of_stock` events. */
    WebhookSubscriptionTopic["VariantsOutOfStock"] = "VARIANTS_OUT_OF_STOCK";
    /** The webhook topic for `inventory_levels/connect` events. */
    WebhookSubscriptionTopic["InventoryLevelsConnect"] = "INVENTORY_LEVELS_CONNECT";
    /** The webhook topic for `inventory_levels/update` events. */
    WebhookSubscriptionTopic["InventoryLevelsUpdate"] = "INVENTORY_LEVELS_UPDATE";
    /** The webhook topic for `inventory_levels/disconnect` events. */
    WebhookSubscriptionTopic["InventoryLevelsDisconnect"] = "INVENTORY_LEVELS_DISCONNECT";
    /** The webhook topic for `attribution/risk` events. */
    WebhookSubscriptionTopic["AttributionRisk"] = "ATTRIBUTION_RISK";
    /** The webhook topic for `inventory_items/create` events. */
    WebhookSubscriptionTopic["InventoryItemsCreate"] = "INVENTORY_ITEMS_CREATE";
    /** The webhook topic for `inventory_items/update` events. */
    WebhookSubscriptionTopic["InventoryItemsUpdate"] = "INVENTORY_ITEMS_UPDATE";
    /** The webhook topic for `inventory_items/delete` events. */
    WebhookSubscriptionTopic["InventoryItemsDelete"] = "INVENTORY_ITEMS_DELETE";
    /** The webhook topic for `locations/create` events. */
    WebhookSubscriptionTopic["LocationsCreate"] = "LOCATIONS_CREATE";
    /** The webhook topic for `locations/update` events. */
    WebhookSubscriptionTopic["LocationsUpdate"] = "LOCATIONS_UPDATE";
    /** The webhook topic for `locations/delete` events. */
    WebhookSubscriptionTopic["LocationsDelete"] = "LOCATIONS_DELETE";
    /** The webhook topic for `tender_transactions/create` events. */
    WebhookSubscriptionTopic["TenderTransactionsCreate"] = "TENDER_TRANSACTIONS_CREATE";
    /** The webhook topic for `app_purchases_one_time/update` events. */
    WebhookSubscriptionTopic["AppPurchasesOneTimeUpdate"] = "APP_PURCHASES_ONE_TIME_UPDATE";
    /** The webhook topic for `app_subscriptions/update` events. */
    WebhookSubscriptionTopic["AppSubscriptionsUpdate"] = "APP_SUBSCRIPTIONS_UPDATE";
    /** The webhook topic for `locales/create` events. */
    WebhookSubscriptionTopic["LocalesCreate"] = "LOCALES_CREATE";
    /** The webhook topic for `locales/update` events. */
    WebhookSubscriptionTopic["LocalesUpdate"] = "LOCALES_UPDATE";
})(WebhookSubscriptionTopic = exports.WebhookSubscriptionTopic || (exports.WebhookSubscriptionTopic = {}));
/** Units of measurement for weight. */
var WeightUnit;
(function (WeightUnit) {
    /** 1 kilogram equals 1000 grams. */
    WeightUnit["Kilograms"] = "KILOGRAMS";
    /** Metric system unit of mass. */
    WeightUnit["Grams"] = "GRAMS";
    /** 1 pound equals 16 ounces. */
    WeightUnit["Pounds"] = "POUNDS";
    /** Imperial system unit of mass. */
    WeightUnit["Ounces"] = "OUNCES";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
//# sourceMappingURL=types.js.map