import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { StacksModule } from "./stacks/stacks.module";

@Module({
  imports: [StacksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
