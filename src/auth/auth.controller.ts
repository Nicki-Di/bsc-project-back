import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { IdentifyUserDto } from "../users/dto/identify-user.dto";
import Debug from "debug";
import * as path from "path";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

const debug = new Debug(`tag:${path.basename(__filename)}`);

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard) // this uses strategies/local.strategy.ts under-the-hood
  login(@Body() IdentifyUserDto: IdentifyUserDto, @Request() req) {
    debug(req.user);
    return this.authService.login(req.user);
  }

  @Get('jwtProtected')
  @ApiBearerAuth('access_token')
  @UseGuards(JwtAuthGuard) // this uses strategies/jwt.strategy.ts under-the-hood
  getProfile(@Request() req) {
    return req.user;
  }
}
