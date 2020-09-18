import { Client } from '../client';
import { Event } from '.';
import { CollectionNodeFragment } from '../queries/types';
declare type R = AsyncGenerator<Event<CollectionNodeFragment>>;
export declare function collectionEventsSince(client: Client, since: Date): R;
export {};
