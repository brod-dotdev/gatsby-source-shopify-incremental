import { Client } from '../client';
import { ApiVersion } from '../types';
export declare function blogsQuery(version: ApiVersion): string;
export declare const loadAllStorefrontBlogs: (client: Client, variables?: Pick<import("./util").NodesFetcherVariables, never> | undefined) => AsyncGenerator<Pick<import("./types").Blog, "title" | "url" | "id" | "handle">, void, unknown>;
