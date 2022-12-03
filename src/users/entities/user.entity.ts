import { Role, Users } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UserEntity implements Users {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty({ required: false, nullable: true })
  fullName: string | null;

  @ApiProperty()
  role: Role;
}
