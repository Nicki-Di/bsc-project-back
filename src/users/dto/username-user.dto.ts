import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UsernameUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ default: 'test@gmail.com' })
  username: string;
}
