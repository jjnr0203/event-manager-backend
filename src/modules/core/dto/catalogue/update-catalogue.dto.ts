import { IsString, IsNumber } from "class-validator";

export class UpdateCatalogueDto {
    @IsString()
    name: string;

    @IsString()
    type: string;

    @IsNumber()
    code: number;
}