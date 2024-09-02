import { IsString, IsNumber } from "class-validator";

export class catalogueDto {
    @IsString()
    name: string;

    @IsString()
    type: string;

    @IsNumber()
    code: number;
}