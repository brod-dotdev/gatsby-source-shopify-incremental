import { CollectionNodeFragment } from '../queries/types';
import { NodeActions } from '.';
export declare function createCollectionNode(collection: CollectionNodeFragment, actions: NodeActions): Promise<void>;
export declare function deleteCollectionNode(storefrontId: string, actions: NodeActions): Promise<void>;
