import { Module } from '@nestjs/common';
import { coreProviders } from './providers';
import { DatabaseModule } from 'src/database/database.module';
import { EventsService } from './services/events.service';
import { CataloguesService } from './services/catalogues.service';
import {
  AddressesController,
  CataloguesController,
  EventsController,
  EmailsController,
  FilesController,
  PaymentsController,
  RegistrationsController,
  SponsorsController,
  TicketTypesController,
  TicketsController,
  TransactionsController,
} from './controllers';
import {
  AddressesService,
  CloudinaryService,
  EmailsService,
  PaymentsService,
  RegistrationsService,
  SponsorsService,
  TicketsService,
  TicketTypesService,
  TransactionsService,
  FilesService,
} from './services';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AddressesController,
    CataloguesController,
    EventsController,
    FilesController,
    EmailsController,
    PaymentsController,
    RegistrationsController,
    SponsorsController,
    TicketTypesController,
    TicketsController,
    TransactionsController,
  ],
  providers: [
    ...coreProviders,
    AddressesService,
    CataloguesService,
    EventsService,
    CloudinaryService,
    EmailsService,
    PaymentsService,
    RegistrationsService,
    SponsorsService,
    TicketTypesService,
    TicketsService,
    TransactionsService,
    FilesService
  ],
})
export class CoreModule {}
