import { IsBoolean, IsDecimal, IsInt, isNotEmpty, IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { EventEntity } from "../../entities/event.entity";

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

    @IsNotEmpty()
    event:EventEntity;

}