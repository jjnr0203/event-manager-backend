import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";
import { EventEntity } from "../../entities/event.entity";
import { UserEntity } from "src/modules/auth/entities/user.entity";

export class CreateRegistrationDto{
    @IsDate()
    @IsNotEmpty()
    deletedAt:Date;
    
    @IsBoolean()
    @IsNotEmpty()
    attended:boolean;

    @IsString()
    event:EventEntity[];

    @IsString()
    user:UserEntity[];
}
