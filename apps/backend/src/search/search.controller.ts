import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import { DocumentsService } from "../documents/documents.service";

@Controller("api/search")
export class SearchController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  search(@Query("q") q?: string) {
    if (!q?.trim()) {
      throw new BadRequestException("q is required");
    }

    return {
      items: this.documentsService.search(q),
    };
  }
}
