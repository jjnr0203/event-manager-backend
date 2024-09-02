import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class catalogueDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsOptional()
    @IsNumber()
    code: number;
}