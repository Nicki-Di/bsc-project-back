import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompleteUserDto } from "./dto/complete-user.dto";
import * as bcrypt from "bcrypt";
import * as path from "path";
import Debug from "debug";
import { UserEntity } from "./entities/user.entity";
import { UsernameUserDto } from "./dto/username-user.dto";

const debug = new Debug(`tag:${path.basename(__filename)}`);

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(UsernameUserDto: UsernameUserDto): Promise<UserEntity> {
    return await this.prisma.users.findUnique({
      where: { username: UsernameUserDto.username },
    });
  }

  async create(CreateUserDto: CompleteUserDto): Promise<UserEntity> {
    try {
      const salt = await bcrypt.genSalt();
      CreateUserDto.password = await bcrypt.hash(CreateUserDto.password, salt);
      return await this.prisma.users.create({ data: CreateUserDto });
    } catch (error) {
      throw `database: ${error.name}`;
    }
  }
}
