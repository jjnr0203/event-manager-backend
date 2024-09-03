import { IsString, IsNumber, IsBoolean } from "class-validator";

export class UpdateVenueDto{
    @IsString()
    name: string;

    @IsNumber()
    capacity: number;

    @IsBoolean()
    isLimited: boolean;
}