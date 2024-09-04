import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";


export class CreateNotificationDto {

    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    message: string;
    
    @IsBoolean()
    hasBeenRead:boolean

    @IsNotEmpty()
    users: UserEntity[];
}