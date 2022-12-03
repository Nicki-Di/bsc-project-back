import { Body, Controller, NotFoundException, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CompleteUserDto } from "./dto/complete-user.dto";
import { ApiTags } from "@nestjs/swagger";
import { UsernameUserDto } from "./dto/username-user.dto";

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/findByUsername')
  async findByUsername(@Body() UsernameUserDto: UsernameUserDto) {
    try {
      return await this.usersService.findOne(UsernameUserDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post('/create')
  async create(@Body() CreateUserDto: CompleteUserDto) {
    try {
      return await this.usersService.create(CreateUserDto);
    } catch (error) {
      throw error;
    }
  }
}
