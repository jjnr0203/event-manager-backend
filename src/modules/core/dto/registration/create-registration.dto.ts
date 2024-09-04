import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";
import { EventEntity } from "../../entities/event.entity";
import { UserEntity } from "src/modules/auth/entities/user.entity";

export class CreateRegistrationDto{
    
    
    @IsBoolean()
    @IsNotEmpty()
    attended:boolean;

    @IsNotEmpty()
    event:EventEntity;

    @IsNotEmpty()
    user:UserEntity;

}
