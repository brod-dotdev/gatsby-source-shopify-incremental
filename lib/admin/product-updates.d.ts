import { Client } from '../client';
/**
 * Generates product updates in batches of 50
 */
export declare const adminProductUpdates: (client: Client, context: Date) => AsyncGenerator<(Pick<import("./types").Product, "id" | "updatedAt" | "storefrontId"> & {
    published: boolean;
})[], void, unknown>;
