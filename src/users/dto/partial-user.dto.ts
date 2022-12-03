import { PartialType } from "@nestjs/swagger";
import { CompleteUserDto } from "./complete-user.dto";

export class PartialUserDto extends PartialType(CompleteUserDto) {}
