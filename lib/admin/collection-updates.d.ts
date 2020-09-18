import { Client } from '../client';
/**
 * Generates product updates in batches of 50
 */
export declare const adminCollectionUpdates: (client: Client, context: Date) => AsyncGenerator<(Pick<import("./types").Collection, "id" | "updatedAt" | "storefrontId"> & {
    published: boolean;
})[], void, unknown>;
