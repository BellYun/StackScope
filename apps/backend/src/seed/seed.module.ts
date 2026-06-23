import { Module } from "@nestjs/common";
import { IngestionModule } from "../ingestion/ingestion.module";
import { SourcesModule } from "../sources/sources.module";
import { SeedController } from "./seed.controller";
import { SeedService } from "./seed.service";

@Module({
  imports: [IngestionModule, SourcesModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
