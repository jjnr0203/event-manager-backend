import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events.controller';
import { coreProviders } from './providers';
import { DatabaseModule } from 'src/database/database.module';
import { EventsService } from './services/events.service';
import { CataloguesController } from './controllers/catalogues.controller';
import { CataloguesService } from './services/catalogues.service';

@Module({
  imports:[DatabaseModule],
  controllers: [EventsController, CataloguesController],
  providers:[...coreProviders, EventsService, CataloguesService],
})
export class CoreModule {}
