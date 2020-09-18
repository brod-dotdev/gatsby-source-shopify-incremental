import { GatsbyNode } from './types/gatsby';
export interface Options {
    sourceId?: string;
    typePrefix: string;
    conflictFieldPrefix?: string;
}
export interface Middleware<T> {
    (node: T, ...args: any[]): Promise<T>;
}
declare const createNodeHelpers: (options?: Partial<Options>) => {
    createNodeFactory: <T extends {
        id: string;
    }>(type: string, middleware?: Middleware<T>) => (obj: T, ...args: any[]) => Promise<GatsbyNode>;
    generateNodeId: (type: string, id: string) => string;
    generateTypeName: (type: string) => string;
};
export default createNodeHelpers;
