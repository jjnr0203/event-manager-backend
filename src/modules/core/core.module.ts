import { Module } from '@nestjs/common';
import { coreProviders } from './providers';
import { DatabaseModule } from 'src/database/database.module';
import { EventsService } from './services/events.service';
import { CataloguesService } from './services/catalogues.service';
import {
  AddressesController,
  CataloguesController,
  CollaboratorsController,
  EventsController,
  FeedbacksController,
  FilesController,
  NotificationsController,
  PaymentsController,
  RegistrationsController,
  SponsorsController,
  TicketTypesController,
  TicketsController,
  TransactionsController,
} from './controllers';
import {
  AddressesService,
  CollaboratorsService,
  FeedbacksService,
  FilesService,
  NotificationsService,
  PaymentsService,
  RegistrationsService,
  SponsorsService,
  TicketsService,
  TicketTypesService,
  TransactionsService,
} from './services';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AddressesController,
    CataloguesController,
    CollaboratorsController,
    EventsController,
    FeedbacksController,
    FilesController,
    NotificationsController,
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
    CollaboratorsService,
    EventsService,
    FeedbacksService,
    FilesService,
    NotificationsService,
    PaymentsService,
    RegistrationsService,
    SponsorsService,
    TicketTypesService,
    TicketsService,
    TransactionsService,
  ],
})
export class CoreModule {}
