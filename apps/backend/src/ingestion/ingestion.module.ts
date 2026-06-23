import { Module } from "@nestjs/common";
import { DocumentsModule } from "../documents/documents.module";
import { SourcesModule } from "../sources/sources.module";
import { IngestionController } from "./ingestion.controller";
import { IngestionService } from "./ingestion.service";

@Module({
  imports: [DocumentsModule, SourcesModule],
  controllers: [IngestionController],
  providers: [IngestionService],
  exports: [IngestionService],
})
export class IngestionModule {}
