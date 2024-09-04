import { IsIn, IsNotEmpty, IsString } from "class-validator";
import { CatalogueEntity } from "../../entities/catalogue.entity";
import { EventEntity } from "../../entities/event.entity";
import { UserEntity } from "src/modules/auth/entities/user.entity";


export class CreateCollaboratorDto {
    @IsNotEmpty()
    access_level: CatalogueEntity;

    @IsNotEmpty()
    @IsString()
    event: EventEntity;

    @IsNotEmpty()
    @IsString()
    user: UserEntity;
}