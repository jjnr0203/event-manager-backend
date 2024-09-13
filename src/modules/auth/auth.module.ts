import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { authProviders } from './providers';
import { GoogleStrategy } from './strategies';
import {
  AuthService,
  InformationUsersService,
  RolesService,
  UsersService,
} from './services';
import {
  AuthController,
  InformationUsersController,
  RolesController,
  UsersController,
} from './controllers';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AuthController,
    InformationUsersController,
    RolesController,
    UsersController,
    AuthController,
  ],
  providers: [
    ...authProviders,
    InformationUsersService,
    RolesService,
    UsersService,
    AuthService,
    GoogleStrategy,
  ],
})
export class AuthModule {}
