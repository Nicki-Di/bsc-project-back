import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString } from "class-validator";
import { Role } from "@prisma/client";
import { UsernameUserDto } from "./username-user.dto";

export class CompleteUserDto extends UsernameUserDto {
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty()
  phoneNumber: string;

  @ApiProperty({ required: false })
  fullName?: string;

  @ApiProperty({ required: false })
  role?: Role;
}
