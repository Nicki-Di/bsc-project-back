import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import * as path from "path";
import Debug from "debug";
import { PartialUserDto } from "../users/dto/partial-user.dto";

const debug = new Debug(`tag:${path.basename(__filename)}`);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username, password): Promise<PartialUserDto> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const passwordCorrect = await bcrypt.compare(password, user.password);
      if (passwordCorrect) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: PartialUserDto) {
    const payload = { username: user.username, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
