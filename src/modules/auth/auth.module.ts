import { Global, Module } from '@nestjs/common';
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
import { JwtModule } from '@nestjs/jwt';
import { envs } from 'src/config/envs';

@Global()
@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret:envs.jwtSecret,
      signOptions:{
        expiresIn: '15m'
      }
    })
  ],
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
  exports:[
    UsersService,
    RolesService
  ]
})
export class AuthModule {}
