import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import type { CreateSourceDto } from "./dto/create-source.dto";
import { SourcesService } from "./sources.service";

@Controller("api/sources")
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @Post()
  create(@Body() body: CreateSourceDto) {
    return this.sourcesService.create(body);
  }

  @Get()
  findAll() {
    return {
      items: this.sourcesService.findAll(),
    };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sourcesService.findOne(id);
  }
}
