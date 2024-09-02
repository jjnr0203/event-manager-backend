import { IsString, IsNotEmpty } from "class-validator";

export class AddresDto {
    @IsString()
    @IsNotEmpty()
    latitude: string;

    @IsString()
    @IsNotEmpty()
    altitude: string;

    @IsString()
    @IsNotEmpty()
    reference: string;

}