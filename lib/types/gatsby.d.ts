/// <reference types="react" />
import { GraphQLSchema, GraphQLNamedType, GraphQLFieldResolver } from 'graphql';
interface GatsbyEventEmitter {
    on: (event: String, fn: Function) => null;
    off: (event: String, fn: Function) => null;
}
interface GatsbyStoreState {
    program: {
        directory: string;
    };
}
interface GatsbyStore {
    getState: () => GatsbyStoreState;
}
export interface GatsbyNode {
    id: string;
    _id: string;
    parent?: string | null;
    children?: string[];
    internal?: {
        mediaType?: string;
        type: string;
        contentDigest: string;
    };
    [key: string]: any;
}
export interface GatsbyReporter {
    info: (msg: string) => null;
    warn: (msg: string) => null;
    error: (msg: string) => null;
    panic: (msg: string, error?: Error) => null;
    panicOnBuild: (msg: string, error?: Error) => null;
    verbose: (msg: string) => null;
}
export interface GatsbyParentChildLink {
    parent: GatsbyNode;
    child: GatsbyNode;
}
export interface GatsbyDeleteOptions {
    node: GatsbyNode;
}
export declare type GatsbyNodeModel = {
    getNodeById: (args: {
        id: string;
    }) => GatsbyNode;
};
export declare type GatsbyGraphQLContext = {
    nodeModel: GatsbyNodeModel;
};
export interface MinimalGatsbyContext {
    createNodeId: GatsbyNodeIdCreator;
    getNode: (id: string) => GatsbyNode | undefined;
}
export declare type GatsbyTypesCreator = (types: string) => null;
export declare type GatsbyResolverMap = {
    [typeName: string]: {
        [fieldName: string]: {
            type?: string;
            resolve: GraphQLFieldResolver<{
                [key: string]: any;
            }, GatsbyGraphQLContext>;
        };
    };
};
export declare type GatsbyResolversCreator = (resolvers: GatsbyResolverMap) => null;
export declare type GatsbyNodeCreator = (node: GatsbyNode) => null;
export declare type GatsbyNodeDeletor = (options: GatsbyDeleteOptions) => null;
export declare type GatsbyNodeIdCreator = (id: string, namespace?: string) => string;
export declare type GatsbyContentDigester = (content: string) => string;
export declare type GatsbyParentChildLinker = (link: GatsbyParentChildLink) => null;
export interface GatsbyCache {
    name: string;
    cache: {
        del: (key: string) => Promise<any>;
        get: (key: string) => Promise<any>;
        set: (key: string, value: any) => Promise<any>;
        mset: (key1: string, val1: any, key2: string, val2: any, key3?: string, val3?: any) => Promise<any>;
    };
}
export interface GatsbyOnNodeTypeContext {
    type: GraphQLNamedType;
}
export interface GatsbyContext {
    emitter: GatsbyEventEmitter;
    cache: GatsbyCache;
    actions: GatsbyActions;
    createNodeId: GatsbyNodeIdCreator;
    createContentDigest: GatsbyContentDigester;
    store: GatsbyStore;
    getNode: (id: string) => GatsbyNode | undefined;
    getNodes: () => GatsbyNode[];
    reporter: GatsbyReporter;
    getNodesByType: any;
}
export interface GatsbySsrContext {
    setHeadComponents: (components: React.ReactElement[]) => undefined;
}
export interface GatsbyActions {
    createTypes: GatsbyTypesCreator;
    createResolvers: GatsbyResolversCreator;
    createNode: GatsbyNodeCreator;
    deleteNode: GatsbyNodeDeletor;
    createParentChildLink: GatsbyParentChildLinker;
    touchNode: (options: {
        nodeId: string;
    }) => null;
    addThirdPartySchema: (schema: {
        schema: GraphQLSchema | string;
    }) => null;
}
export interface ReduxSetSchemaAction {
    payload: GraphQLSchema;
}
export {};