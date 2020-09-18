import { ProductNodeFragment } from '../queries/types';
import { NodeActions } from '.';
import { CreationEvent } from '../admin';
export interface ProductNode extends ProductNodeFragment {
    variants___NODE?: string[];
    metafields___NODE?: string[];
}
export declare function createProductNode(product: ProductNodeFragment, actions: NodeActions): Promise<void>;
export declare function deleteProductNode(storefrontId: string, actions: NodeActions): Promise<void>;
export declare function upsertProductNode(event: CreationEvent<ProductNodeFragment>, actions: NodeActions): Promise<void>;
