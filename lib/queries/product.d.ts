import { Client } from '../client';
export declare const loadAllStorefrontProducts: (client: Client, variables?: Pick<import("./util").NodesFetcherVariables, never> | undefined) => AsyncGenerator<import("./types").ProductNodeFragment, void, unknown>;
export declare function fetchStorefrontProductsByIds(client: Client, ids: string[]): Promise<import("./types").Maybe<import("./types").ProductNodeFragment>[]>;
