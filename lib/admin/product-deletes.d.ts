import { Client } from '../client';
/**
 * Generates product deletes in batches of 50
 */
export declare const adminProductDeletes: (client: Client, context: Date) => AsyncGenerator<Pick<import("./types").DeletionEvent, "occurredAt" | "subjectId">[], void, unknown>;
