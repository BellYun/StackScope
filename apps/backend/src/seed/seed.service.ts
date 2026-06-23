import { Injectable } from "@nestjs/common";
import { IngestionService } from "../ingestion/ingestion.service";
import { SourcesService } from "../sources/sources.service";

@Injectable()
export class SeedService {
  constructor(
    private readonly ingestionService: IngestionService,
    private readonly sourcesService: SourcesService,
  ) {}

  seedFrontendJobs() {
    const source = this.sourcesService.create({
      name: "Frontend job sample",
      type: "seed",
    });

    const job = this.ingestionService.createJob({
      sourceId: source.id,
      documents: [
        {
          title: "Frontend Engineer",
          company: "Signal Commerce",
          publishedAt: "2026-06-01",
          rawText: "React, TypeScript, NextJS 경험이 필요합니다. React Query와 Tailwind CSS 경험자를 우대합니다.",
        },
        {
          title: "Vue/Nuxt Developer",
          company: "Scope Labs",
          publishedAt: "2026-06-02",
          rawText: "Vue.js와 Nuxt 기반 대시보드 개발자를 찾습니다. TypeScript 경험이 있으면 좋습니다.",
        },
        {
          title: "Backend Platform Engineer",
          company: "Radar Works",
          publishedAt: "2026-06-03",
          rawText: "NestJS, PostgreSQL, Redis 기반 데이터 파이프라인을 운영합니다.",
        },
      ],
    });

    return {
      source,
      job,
    };
  }
}
