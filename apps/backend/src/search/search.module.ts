import { Module } from "@nestjs/common";
import { DocumentsModule } from "../documents/documents.module";
import { SearchController } from "./search.controller";

@Module({
  imports: [DocumentsModule],
  controllers: [SearchController],
})
export class SearchModule {}
