import { Controller, Get } from "@nestjs/common";
import { DocumentsService } from "./documents.service";

@Controller("api/documents")
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  findAll() {
    return {
      items: this.documentsService.findAll(),
    };
  }
}
