import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class CreateCatalogueDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    description: string;

    @IsOptional()
    @IsNumber()
    code: number;
}