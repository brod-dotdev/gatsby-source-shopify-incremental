import { Client } from '../client';
export interface NodesFetcherVariables {
    first: number;
    after?: string | null;
}
export interface NodesFetcherResponse<T> {
    edges: {
        node: T;
        cursor: string;
    }[];
    pageInfo: {
        hasNextPage: boolean;
    };
}
export interface NodesFetcher<T, V extends NodesFetcherVariables = NodesFetcherVariables> {
    (client: Client, variables: V, page: number): Promise<NodesFetcherResponse<T>>;
}
export declare function fetchAllNodesFactory<T>(fetcher: NodesFetcher<T>): (client: Client, variables?: Pick<NodesFetcherVariables, never> | undefined) => AsyncGenerator<T, void, unknown>;
