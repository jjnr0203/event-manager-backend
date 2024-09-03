import { IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";

export class CreateTicketTypeDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsInt()
    @IsNotEmpty()
    disponibility: number;

    @IsDecimal()
    @IsNotEmpty()
    price: number;

    @IsBoolean()
    @IsNotEmpty()
    isAvailable: boolean;

    @IsString()
    user:UserEntity[];

}