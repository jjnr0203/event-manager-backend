import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { InformationUsersController } from './controllers/information-users.controller';
import { RolesController } from './controllers/roles.controller';
import { UsersController } from './controllers/users.controller';
import { InformationUsersService } from './services/information-users.service';
import { RolesService } from './services/roles.service';
import { UsersService } from './services/users.service';
import { authProviders } from './providers';
import { AuthController } from './controllers/auth.controller';
import { GoogleStrategy } from './utils/google.strategy';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController,InformationUsersController, RolesController, UsersController, AuthController],
  providers: [
    ...authProviders,
    InformationUsersService,
    RolesService,
    UsersService,
    GoogleStrategy
  ],
})
export class AuthModule {}
