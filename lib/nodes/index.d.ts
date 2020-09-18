import { GatsbyNodeCreator, GatsbyNodeDeletor, GatsbyNode } from '../types';
import { PageNodeFragment, BlogNodeFragment, ArticleNodeFragment } from '../queries/types';
export interface NodeActions {
    getNode: (id: string) => GatsbyNode | undefined;
    createNode: GatsbyNodeCreator;
    deleteNode: GatsbyNodeDeletor;
}
export * from './product';
export * from './collection';
export declare const ShopPolicyNode: (obj: {
    id: string;
}, ...args: any[]) => Promise<GatsbyNode>;
export declare const ArticleNode: (obj: any, ...args: any[]) => Promise<GatsbyNode>;
export declare function createArticleNode(page: ArticleNodeFragment, actions: NodeActions): Promise<void>;
export declare const BlogNode: (obj: {
    id: string;
}, ...args: any[]) => Promise<GatsbyNode>;
export declare function createBlogNode(page: BlogNodeFragment, actions: NodeActions): Promise<void>;
export declare const PageNode: (obj: {
    id: string;
}, ...args: any[]) => Promise<GatsbyNode>;
export declare function createPageNode(page: PageNodeFragment, actions: NodeActions): Promise<void>;
