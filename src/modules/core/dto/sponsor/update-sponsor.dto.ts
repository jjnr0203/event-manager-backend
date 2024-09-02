import { IsString } from "class-validator";

export class SponsorDto{
    @IsString()
    email:string;

    @IsString()
    contact: string;
}