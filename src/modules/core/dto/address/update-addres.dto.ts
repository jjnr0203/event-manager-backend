import { IsString } from "class-validator";

export class UpdateAddresDto {
    @IsString()
    latitude: string;

    @IsString()
    altitude: string;

    @IsString()
    reference: string;
}