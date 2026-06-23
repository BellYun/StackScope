import type { CreateDocumentInput } from "../../documents/document.entity";

export interface CreateIngestionJobDto {
  sourceId: string;
  documents: CreateDocumentInput[];
}
