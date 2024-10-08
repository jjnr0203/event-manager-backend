import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto';
import { UsersService } from './users.service';
import { CreateUserFromGoogleDto } from '../dto/user/create-google-user.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/user/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private repository: Repository<UserEntity>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(userId: string) {
    const payload = { sub: userId };
    return  this.jwtService.sign(payload);
  }

  async validateLocalUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) throw new UnauthorizedException('User not found');
    const isPasswordMatch = await compare(password, user.password);
    if (!isPasswordMatch)
      throw new UnauthorizedException('Invalid credentials');
    return {
      id: user.id,
    };
  }

  async validateOAuthUser(googleUser: CreateUserFromGoogleDto) {
    const user = await this.repository.findOneBy({ email: googleUser.email });

    if (user) {
      return user;
    }
    return await this.usersService.createUserFromGoogle(googleUser);
  }
}
