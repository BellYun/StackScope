import { Injectable } from "@nestjs/common";
import { createId } from "../common/id.util";
import { createContentHash, normalizeText } from "../common/text.util";
import { StacksService } from "../stacks/stacks.service";
import type { DocumentStackMention } from "./document-stack-mention.entity";
import type { CreateDocumentInput, Document } from "./document.entity";

@Injectable()
export class DocumentsService {
  private readonly documents = new Map<string, Document>();
  private readonly documentIdsByHash = new Map<string, string>();
  private readonly mentions = new Map<string, DocumentStackMention>();

  constructor(private readonly stacksService: StacksService) {}

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
    this.createMentions(document);

    return {
      duplicated: false,
      document,
    };
  }

  findAll() {
    return Array.from(this.documents.values())
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((document) => this.withStacks(document));
  }

  findMentions() {
    return Array.from(this.mentions.values());
  }

  private createMentions(document: Document) {
    const matches = this.stacksService.findMatches(document.normalizedText);

    for (const match of matches) {
      const mention: DocumentStackMention = {
        id: createId("men"),
        documentId: document.id,
        stackId: match.stack.id,
        matchedAlias: match.matchedAlias,
        createdAt: new Date().toISOString(),
      };

      this.mentions.set(mention.id, mention);
    }
  }

  private withStacks(document: Document) {
    const stacks = Array.from(this.mentions.values())
      .filter((mention) => mention.documentId === document.id)
      .map((mention) => ({
        ...mention,
        stack: this.stacksService.findOne(mention.stackId),
      }));

    return {
      ...document,
      stacks,
    };
  }
}
