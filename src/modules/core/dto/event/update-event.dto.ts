import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";


export class CreateEventDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsDate()
    start_date: Date;
    
    @IsNotEmpty()
    @IsDate()
    end_date: Date;
    
    @IsNotEmpty()
    @IsString()
    state: string;
    
    @IsNotEmpty()
    @IsBoolean()
    isPublic: boolean;
    

    category: string;

    organizer: string;

    venue: string;/*  */

    sponsors?: string[]

    files: string[]

    registrations: string[]

    feedback: string[]
}