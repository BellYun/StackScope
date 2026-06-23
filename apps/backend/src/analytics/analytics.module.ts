import { Module } from "@nestjs/common";
import { DocumentsModule } from "../documents/documents.module";
import { StacksModule } from "../stacks/stacks.module";
import { AnalyticsController } from "./analytics.controller";
import { AnalyticsService } from "./analytics.service";

@Module({
  imports: [DocumentsModule, StacksModule],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
