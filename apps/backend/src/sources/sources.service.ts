import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { createId } from "../common/id.util";
import type { CreateSourceDto } from "./dto/create-source.dto";
import type { Source } from "./source.entity";

@Injectable()
export class SourcesService {
  private readonly sources = new Map<string, Source>();

  create(dto: CreateSourceDto) {
    if (!dto.name?.trim()) {
      throw new BadRequestException("name is required");
    }

    const source: Source = {
      id: createId("src"),
      name: dto.name.trim(),
      type: dto.type ?? "manual",
      createdAt: new Date().toISOString(),
    };

    this.sources.set(source.id, source);
    return source;
  }

  findAll() {
    return Array.from(this.sources.values()).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  findOne(id: string) {
    const source = this.sources.get(id);
    if (!source) {
      throw new NotFoundException("Source not found");
    }

    return source;
  }
}
