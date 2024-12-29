import { Module } from '@nestjs/common';
import { coreProviders } from './providers';
import { DatabaseModule } from 'src/database/database.module';
import { CataloguesService } from './services/catalogues.service';
import {
  AddressesController,
  CataloguesController,
  EventsController,
  FilesController,
  OrdersController,
  PaymentController,
  SponsorsController,
  TicketTypesController,
  TicketsController,
} from './controllers';
import {
  AddressesService,
  CloudinaryService,
  SponsorsService,
  TicketsService,
  TicketTypesService,
  FilesService,
  PaymentService,
  OrdersService,
  EventsService
} from './services';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AddressesController,
    CataloguesController,
    EventsController,
    FilesController,
    PaymentController,
    SponsorsController,
    TicketTypesController,
    TicketsController,
    OrdersController,
  ],
  providers: [
    ...coreProviders,
    AddressesService,
    CataloguesService,
    EventsService,
    CloudinaryService,
    SponsorsService,
    TicketTypesService,
    TicketsService,
    FilesService,
    PaymentService,
    OrdersService,
  ],
})
export class CoreModule {}
