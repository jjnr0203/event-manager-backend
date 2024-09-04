import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateAddresDto {
    @IsNumber()
    @IsNotEmpty()
    latitude: number;

    @IsNumber()
    @IsNotEmpty()
    altitude: number;

    @IsString()
    @IsNotEmpty()
    reference: string;

    @IsString()
    @IsNotEmpty()
    mainStreet: string;

}