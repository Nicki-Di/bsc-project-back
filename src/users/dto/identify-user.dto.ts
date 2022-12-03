import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { UsernameUserDto } from "./username-user.dto";

export class IdentifyUserDto extends UsernameUserDto {
  @IsNotEmpty()
  @ApiProperty({ default: '@8as.Y)2>w' })
  password: string;
}
