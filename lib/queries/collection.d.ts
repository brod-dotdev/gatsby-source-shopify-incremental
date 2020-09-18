import { Client } from '../client';
export declare const loadAllStorefrontCollections: (client: Client, variables?: Pick<import("./util").NodesFetcherVariables, never> | undefined) => AsyncGenerator<import("./types").CollectionNodeFragment, void, unknown>;
export declare function fetchStorefrontCollectionsByIds(client: Client, ids: string[]): Promise<import("./types").Maybe<import("./types").CollectionNodeFragment>[]>;
