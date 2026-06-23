import { Injectable } from "@nestjs/common";
import { DocumentsService } from "../documents/documents.service";
import { StacksService } from "../stacks/stacks.service";

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly stacksService: StacksService,
  ) {}

  getStackCounts() {
    const counts = new Map<string, number>();

    for (const mention of this.documentsService.findMentions()) {
      counts.set(mention.stackId, (counts.get(mention.stackId) ?? 0) + 1);
    }

    return this.stacksService
      .findAll()
      .map((stack) => ({
        stack,
        documentCount: counts.get(stack.id) ?? 0,
      }))
      .filter((item) => item.documentCount > 0)
      .sort((a, b) => b.documentCount - a.documentCount);
  }
}
