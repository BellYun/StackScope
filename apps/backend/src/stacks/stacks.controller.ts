import { Controller, Get, Param } from "@nestjs/common";
import { StacksService } from "./stacks.service";

@Controller("api/stacks")
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

  @Get()
  findAll() {
    return {
      items: this.stacksService.findAll(),
    };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.stacksService.findOne(id);
  }
}
