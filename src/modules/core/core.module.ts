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
  EmailsController,
  FeedbacksController,
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
  CollaboratorsService,
  FeedbacksService,
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
    CollaboratorsController,
    EventsController,
    FeedbacksController,
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
    CollaboratorsService,
    EventsService,
    FeedbacksService,
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
