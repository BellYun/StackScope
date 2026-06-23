import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DocumentsModule } from "./documents/documents.module";
import { IngestionModule } from "./ingestion/ingestion.module";
import { SearchModule } from "./search/search.module";
import { SourcesModule } from "./sources/sources.module";
import { StacksModule } from "./stacks/stacks.module";

@Module({
  imports: [StacksModule, SourcesModule, DocumentsModule, IngestionModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
