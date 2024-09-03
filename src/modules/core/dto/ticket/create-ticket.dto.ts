import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";
import { TicketEntity } from "../../entities/ticket.entity";
import { TicketTypeEntity } from "../../entities/ticket-type.entity";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { EventEntity } from "../../entities/event.entity";

export class CreateTicketDto{
    @IsString()
    @IsNotEmpty()
    code: string;
    
    @IsBoolean()
    @IsNotEmpty()
    state: string;
    
    @IsDate()
    @IsNotEmpty()
    generatedDate: Date;
    
    @IsString()
    ticketType:TicketTypeEntity[];
    
    @IsString()
    user:UserEntity[];
    
    @IsString()
    event:EventEntity[];


}