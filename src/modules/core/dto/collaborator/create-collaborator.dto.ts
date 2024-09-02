import { IsNotEmpty, IsString } from "class-validator";


export class CreateCollaboratorDto {

    @IsNotEmpty()
    @IsString()
    access_level: string;

    @IsNotEmpty()
    @IsString()
    event: string;

    @IsNotEmpty()
    @IsString()
    user: string;
}