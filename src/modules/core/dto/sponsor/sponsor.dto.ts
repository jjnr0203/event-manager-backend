import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class SponsorDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    contact: string;
}