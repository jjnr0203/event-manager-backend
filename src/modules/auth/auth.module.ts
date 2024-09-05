import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { InformationUsersController } from './controllers/information-users.controller';
import { RolesController } from './controllers/roles.controller';
import { UsersController } from './controllers/users.controller';
import { InformationUsersService } from './services/information-users.service';
import { RolesService } from './services/roles.service';
import { UsersService } from './services/users.service';
import { authProviders } from './providers';

@Module({
  imports: [DatabaseModule],
  controllers: [InformationUsersController, RolesController, UsersController],
  providers: [
    ...authProviders,
    InformationUsersService,
    RolesService,
    UsersService,
  ],
})
export class AuthModule {}
