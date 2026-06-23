export interface Document {
  id: string;
  sourceId: string;
  jobId: string;
  title: string;
  company?: string;
  url?: string;
  rawText: string;
  normalizedText: string;
  contentHash: string;
  publishedAt?: string;
  createdAt: string;
}

export interface CreateDocumentInput {
  title: string;
  rawText: string;
  company?: string;
  url?: string;
  publishedAt?: string;
}
