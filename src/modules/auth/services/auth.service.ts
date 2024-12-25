import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserFromGoogleDto } from '../dto/user/create-google-user.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dto';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { LoginDto } from '../dto/user/login.dto';
import { envs } from 'src/config/envs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private readonly repository: Repository<UserEntity>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findOneByEmail(loginDto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isPasswordMatch = await compare(loginDto.password, user.password);
    if (!isPasswordMatch)
      throw new UnauthorizedException('Invalid credentials');
    const { password, ...rest } = user;
    return rest;
  }

  async generateJwt(id: string) {
    const payload: JwtPayload = { id };
    return this.jwtService.sign(payload);
  }

  async validateOAuthUser(googleUser: CreateUserFromGoogleDto) {
    const user = await this.repository.findOneBy({ email: googleUser.email });

    if (user) {
      return user;
    }
    return await this.registerFromGoogle(googleUser);
  }

  async registerFromGoogle(googleUser: CreateUserFromGoogleDto) {
    return await this.usersService.create(googleUser);
  }
  async registerLocalUser(localUser: CreateUserDto) {
    return await this.usersService.create(localUser);
  }

  async validateToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: envs.jwtSecret,
      });

      const user = await this.usersService.findOne(payload.id);
      if (!user) throw new UnauthorizedException('User does not exists');

      return user;
    } catch (error) {
      console.log(error);

      throw new UnauthorizedException();
    }
  }
}
