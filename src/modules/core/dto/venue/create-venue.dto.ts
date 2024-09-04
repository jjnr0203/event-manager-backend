import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from "class-validator";
import { EventEntity } from "../../entities/event.entity";
import { CreateAddresDto } from "../address/create-address.dto";

export class CreateVenueDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsNumber()
    capacity: number;

    @IsNotEmpty()
    @IsBoolean()
    isLimited: boolean;

    events: EventEntity[]
    address: CreateAddresDto
}