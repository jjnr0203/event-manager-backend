import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { CreateSponsorDto } from '../sponsor/create-sponsor.dto';
import { CatalogueEntity } from '../../entities/catalogue.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { CreateFileDto } from '../file/create-file.dto';
import { CreateAddresDto } from '../address/create-address.dto';

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
  status: CatalogueEntity;

  @IsNotEmpty()
  @IsBoolean()
  isPublic: boolean;

  @IsNotEmpty()
  category: CatalogueEntity;

  @IsNotEmpty()
  organizer: UserEntity;

  @IsNotEmpty()
  address: CreateAddresDto;
  
  @IsNotEmpty()
  sponsors?: CreateSponsorDto[];
  
  @IsNotEmpty()
  files: CreateFileDto[];
}
