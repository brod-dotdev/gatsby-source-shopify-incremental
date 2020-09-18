import { Client } from '../client';
/**
 * Generates collection deletes in batches of 50
 */
export declare const adminCollectionDeletes: (client: Client, context: Date) => AsyncGenerator<Pick<import("./types").DeletionEvent, "occurredAt" | "subjectId">[], void, unknown>;
