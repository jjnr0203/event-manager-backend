import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { DatabaseSeeder } from './seeders/database.seeder';
import { CataloguesService } from 'src/modules/core/services';
import { coreProviders } from 'src/modules/core/providers';

@Global()
@Module({
  providers: [
    ...databaseProviders,
    DatabaseSeeder,
    CataloguesService,
    ...coreProviders,
  ],
  exports: [...databaseProviders, DatabaseSeeder],
})
export class DatabaseModule {}
