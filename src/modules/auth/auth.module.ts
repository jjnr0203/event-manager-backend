import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { authProviders } from './providers';
import { GoogleStrategy, JwtStrategy } from './strategies';
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
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config/config';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';

@Global()
@Module({
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwt,
          signOptions: {
            expiresIn: '1h',
          },
        };
      },
    }),
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
    LocalStrategy,
    GoogleStrategy,
    JwtStrategy
  ],
  exports:[
    UsersService,
    RolesService
  ]
})
export class AuthModule {}
