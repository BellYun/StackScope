import { Injectable } from "@nestjs/common";
import { createId } from "../common/id.util";
import { createContentHash, normalizeText } from "../common/text.util";
import type { CreateDocumentInput, Document } from "./document.entity";

@Injectable()
export class DocumentsService {
  private readonly documents = new Map<string, Document>();
  private readonly documentIdsByHash = new Map<string, string>();

  create(sourceId: string, jobId: string, input: CreateDocumentInput) {
    const normalizedText = normalizeText(`${input.title} ${input.company ?? ""} ${input.rawText}`);
    const contentHash = createContentHash(normalizedText);

    if (this.documentIdsByHash.has(contentHash)) {
      return {
        duplicated: true,
        document: this.documents.get(this.documentIdsByHash.get(contentHash)!),
      };
    }

    const document: Document = {
      id: createId("doc"),
      sourceId,
      jobId,
      title: input.title.trim(),
      company: input.company?.trim(),
      url: input.url?.trim(),
      rawText: input.rawText,
      normalizedText,
      contentHash,
      publishedAt: input.publishedAt,
      createdAt: new Date().toISOString(),
    };

    this.documents.set(document.id, document);
    this.documentIdsByHash.set(contentHash, document.id);

    return {
      duplicated: false,
      document,
    };
  }

  findAll() {
    return Array.from(this.documents.values()).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }
}
