import { AxiosInstance } from 'axios';
import { PluginConfig } from './config';
import { ApiVersion, GatsbyReporter } from './types';
export interface GQLClient {
    <QueryResult, Variables>(name: string, query: string, variables?: Variables): Promise<QueryResult>;
}
export interface Client {
    admin: AxiosInstance;
    storefront: GQLClient;
    version: ApiVersion;
    destroy: () => void;
}
export declare function createClient(config: PluginConfig, reporter: GatsbyReporter): Client;
