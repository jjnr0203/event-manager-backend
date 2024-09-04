import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";
import { CreateSponsorDto } from "../sponsor/create-sponsor.dto";
import { CatalogueEntity } from "../../entities/catalogue.entity";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { CreateVenueDto } from "../venue/create-venue.dto";
import { CreateFileDto } from "../file/create-file.dto";
import { CreateFeedbackDto } from "../feedback/create-feedback.dto";
import { CreateRegistrationDto } from "../registration/create-registration.dto";


export class CreateEventDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDate()
    start_date: Date;

    @IsNotEmpty()
    @IsDate()
    end_date: Date;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsBoolean()
    isPublic: boolean;


    category: CatalogueEntity;

    organizer: UserEntity;

    venue: CreateVenueDto;

    sponsors?: CreateSponsorDto[]

    files: CreateFileDto[]

    registrations: CreateRegistrationDto[]

    feedback: CreateFeedbackDto[];
}