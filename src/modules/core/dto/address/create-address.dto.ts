import { IsString, IsNotEmpty } from "class-validator";

export class CreateAddresDto {
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