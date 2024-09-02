import { IsString, IsNotEmpty } from "class-validator";
import { UserEntity } from "../../entities/user.entity";

export class InformationUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    user: UserEntity
}