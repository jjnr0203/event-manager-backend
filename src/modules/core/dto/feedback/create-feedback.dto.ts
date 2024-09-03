import { IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { EventEntity } from "../../entities/event.entity";

export class CreateFeedbackDto {
    @IsString()
    @IsNotEmpty()
    rating: string;

    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsString()
    @IsNotEmpty()
    feedback_date: string;
    
    @IsNotEmpty()
    user : UserEntity[];
    
    @IsNotEmpty()
    event: EventEntity[];
}