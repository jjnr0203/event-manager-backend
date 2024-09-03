import { IsString, IsNotEmpty } from "class-validator";
import { UserEntity } from "../../entities/user.entity";

export class UpdateInformationUserDto{
    @IsString()
    name: string;

    @IsString()
    lastname: string;

    @IsString()
    phone: string;

    @IsNotEmpty()
    user: UserEntity
}