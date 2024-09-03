import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class CreateSponsorDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    contact: string;

    event: string;
}