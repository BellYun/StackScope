import { BadRequestException, Injectable } from "@nestjs/common";
import { createId } from "../common/id.util";
import { DocumentsService } from "../documents/documents.service";
import { SourcesService } from "../sources/sources.service";
import type { CreateIngestionJobDto } from "./dto/create-ingestion-job.dto";
import type { IngestionJob } from "./ingestion-job.entity";

@Injectable()
export class IngestionService {
  private readonly jobs = new Map<string, IngestionJob>();

  constructor(
    private readonly documentsService: DocumentsService,
    private readonly sourcesService: SourcesService,
  ) {}

  createJob(dto: CreateIngestionJobDto) {
    this.sourcesService.findOne(dto.sourceId);

    if (!Array.isArray(dto.documents) || dto.documents.length === 0) {
      throw new BadRequestException("documents must contain at least one item");
    }

    const job: IngestionJob = {
      id: createId("job"),
      sourceId: dto.sourceId,
      status: "processing",
      totalCount: dto.documents.length,
      processedCount: 0,
      failedCount: 0,
      duplicatedCount: 0,
      createdAt: new Date().toISOString(),
    };
    this.jobs.set(job.id, job);

    for (const document of dto.documents) {
      if (!document.title?.trim() || !document.rawText?.trim()) {
        job.failedCount += 1;
        continue;
      }

      const result = this.documentsService.create(dto.sourceId, job.id, document);
      if (result.duplicated) {
        job.duplicatedCount += 1;
      } else {
        job.processedCount += 1;
      }
    }

    job.status = job.failedCount === job.totalCount ? "failed" : "completed";
    job.finishedAt = new Date().toISOString();
    this.jobs.set(job.id, job);

    return job;
  }

  findAllJobs() {
    return Array.from(this.jobs.values()).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }
}
