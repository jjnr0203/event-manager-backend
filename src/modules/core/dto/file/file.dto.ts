import { IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";

export class FileDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    url: string;

    @IsNotEmpty()
    @IsString()
    publicId: string;

    @IsNotEmpty()
    @IsString()
    resourceType: string;

    @IsNotEmpty()
    @IsString()
    format: string;

    @IsOptional()
    @IsNumber()
    size: number;
    
    @IsOptional()
    @IsNumber()
    width: number;

    @IsOptional()
    @IsNumber()
    height: number;

}