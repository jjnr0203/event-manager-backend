import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsInt } from "class-validator";
import { EventEntity } from "../../entities/event.entity";
import { CreateAddresDto } from "../address/create-address.dto";

export class CreateVenueDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsInt()
    capacity: number;

    @IsNotEmpty()
    @IsBoolean()
    isLimited: boolean;

    address: CreateAddresDto
}