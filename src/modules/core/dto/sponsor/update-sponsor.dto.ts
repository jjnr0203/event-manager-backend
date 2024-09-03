import { IsString } from "class-validator";

export class UpdateSponsorDto{
    @IsString()
    email:string;

    @IsString()
    contact: string;
}