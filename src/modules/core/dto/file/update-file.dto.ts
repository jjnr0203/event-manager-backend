import { IsString, IsNumber } from "class-validator";

export class FileDto{
    @IsString()
    name:string;

    @IsString()
    url: string;

    @IsString()
    publicId: string;

    @IsString()
    resourceType: string;

    @IsString()
    format: string;

    @IsNumber()
    size: number;
    
    @IsNumber()
    width: number;

    @IsNumber()
    height: number;

}