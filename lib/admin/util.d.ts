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
export interface NodesFetcher<T, V> {
    (client: Client, variables: NodesFetcherVariables & V): Promise<NodesFetcherResponse<T>>;
}
export interface Con<T, C = any> {
    (node: T, context: C): boolean;
}
export interface Var<V, C> {
    (context: C): V;
}
export declare function batchAllNodesFactory<T, V, C = any>(fetcher: NodesFetcher<T, V>, con: Con<T, C>, vars: Var<V, C>, size?: number): (client: Client, context: C) => AsyncGenerator<T[], void, unknown>;
