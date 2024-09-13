import { Inject, Injectable } from '@nestjs/common';
import { AuthRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto';
import { UsersService } from './users.service';
import { CreateUserFromGoogleDto } from '../dto/user/create-google-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private repository: Repository<UserEntity>,
    private readonly usersService: UsersService,
  ) {}
  
  async validateOAuthUser(googleUser: CreateUserFromGoogleDto) {

    const user = await this.repository.findOneBy({ email: googleUser.email });

    if (!user) {
      return await this.usersService.createUserFromGoogle(googleUser);
    }

    return user;
  }
}
