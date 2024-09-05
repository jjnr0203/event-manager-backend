import { IsString, IsNotEmpty } from "class-validator";
import { UserEntity } from "../../entities/user.entity";
import { CreateUserDto } from "../user/create-user.dto";

export class CreateInformationUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    //user: CreateUserDto[]
}