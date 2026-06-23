import { Body, Controller, Get, Post } from "@nestjs/common";
import type { CreateIngestionJobDto } from "./dto/create-ingestion-job.dto";
import { IngestionService } from "./ingestion.service";

@Controller("api/ingestion-jobs")
export class IngestionController {
  constructor(private readonly ingestionService: IngestionService) {}

  @Post()
  createJob(@Body() body: CreateIngestionJobDto) {
    return this.ingestionService.createJob(body);
  }

  @Get()
  findAllJobs() {
    return {
      items: this.ingestionService.findAllJobs(),
    };
  }
}
