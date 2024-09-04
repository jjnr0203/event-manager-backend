import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { EventEntity } from "../../entities/event.entity";

export class CreateFeedbackDto {
    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsString()
    @IsNotEmpty()
    comment: string;
    
    @IsNotEmpty()
    user : UserEntity;
    
    @IsNotEmpty()
    event: EventEntity;
}