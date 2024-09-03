import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from "class-validator";

export class CreateVenueDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsNumber()
    capacity: number;

    @IsNotEmpty()
    @IsBoolean()
    isLimited: boolean;
}