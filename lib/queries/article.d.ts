import { Client } from '../client';
import { ApiVersion } from '../types';
export declare function articlesQuery(version: ApiVersion): string;
export declare const loadAllStorefrontArticles: (client: Client, variables?: Pick<import("./util").NodesFetcherVariables, never> | undefined) => AsyncGenerator<import("./types").ArticleNodeFragment, void, unknown>;
