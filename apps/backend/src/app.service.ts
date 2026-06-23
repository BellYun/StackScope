import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getRoot() {
    return {
      service: "stackscope-backend",
      health: "/api/health",
    };
  }

  getHealth() {
    return {
      ok: true,
      service: "stackscope-backend",
    };
  }
}
