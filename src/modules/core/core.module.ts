import { Module } from '@nestjs/common';
import { coreProviders } from './providers';
import { DatabaseModule } from 'src/database/database.module';
import { EventsService } from './services/events.service';
import { CataloguesService } from './services/catalogues.service';
import {
  AddressesController,
  CataloguesController,
  EventsController,
  FilesController,
  PaymentsController,
  SponsorsController,
  TicketTypesController,
  TicketsController,
} from './controllers';
import {
  AddressesService,
  CloudinaryService,
  PaymentsService,
  SponsorsService,
  TicketsService,
  TicketTypesService,
  FilesService,
} from './services';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AddressesController,
    CataloguesController,
    EventsController,
    FilesController,
    PaymentsController,
    SponsorsController,
    TicketTypesController,
    TicketsController,
  ],
  providers: [
    ...coreProviders,
    AddressesService,
    CataloguesService,
    EventsService,
    CloudinaryService,
    PaymentsService,
    SponsorsService,
    TicketTypesService,
    TicketsService,
    FilesService
  ],
})
export class CoreModule {}
