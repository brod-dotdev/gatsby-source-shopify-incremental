import { Client } from '../client';
import { ApiVersion } from '../types';
export declare function pagesQuery(version: ApiVersion): string;
export declare const loadAllStorefrontPages: (client: Client, variables?: Pick<import("./util").NodesFetcherVariables, never> | undefined) => AsyncGenerator<Pick<import("./types").Page, "body" | "title" | "url" | "id" | "handle" | "updatedAt" | "createdAt" | "bodySummary">, void, unknown>;
