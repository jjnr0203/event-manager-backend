import { PartialType } from "@nestjs/mapped-types";
import { CreateAddresDto } from "./create-address.dto";

export class UpdateAddresDto extends PartialType(CreateAddresDto){}