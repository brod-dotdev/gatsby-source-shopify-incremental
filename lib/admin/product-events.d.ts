import { Client } from '../client';
import { Event } from '.';
import { ProductNodeFragment } from '../queries/types';
declare type R = AsyncGenerator<Event<ProductNodeFragment>>;
export declare function productEventsSince(client: Client, since: Date): R;
export {};
