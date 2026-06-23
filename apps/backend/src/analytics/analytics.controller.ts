import { Controller, Get } from "@nestjs/common";
import { AnalyticsService } from "./analytics.service";

@Controller("api/analytics")
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get("stacks")
  getStackCounts() {
    return {
      items: this.analyticsService.getStackCounts(),
    };
  }
}
