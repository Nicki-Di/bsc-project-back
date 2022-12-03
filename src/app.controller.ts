import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import * as path from "path";
import Debug from "debug";

const debug = new Debug(`tag:${path.basename(__filename)}`);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
