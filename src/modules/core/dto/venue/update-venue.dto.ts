import { IsString, IsNumber, IsBoolean } from "class-validator";

export class VenueDto{
    @IsString()
    name: string;

    @IsNumber()
    capacity: number;

    @IsBoolean()
    isLimited: boolean;
}