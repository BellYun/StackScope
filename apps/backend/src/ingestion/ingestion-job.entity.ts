export type IngestionJobStatus = "queued" | "processing" | "completed" | "failed";

export interface IngestionJob {
  id: string;
  sourceId: string;
  status: IngestionJobStatus;
  totalCount: number;
  processedCount: number;
  failedCount: number;
  duplicatedCount: number;
  createdAt: string;
  finishedAt?: string;
}
