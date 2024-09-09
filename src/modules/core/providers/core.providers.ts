import {
  CoreRepositoryEnum,
  DatabaseProviderEnum,
} from 'src/shared/enums/repository.enum';
import { DataSource } from 'typeorm';
import { FeedbackEntity } from '../entities/feedback.entity';
import { CatalogueEntity } from '../entities/catalogue.entity';
import { AddressEntity } from '../entities/address.entity';
import { CollaboratorEntity } from '../entities/collaborator.entity';
import { EventEntity } from '../entities/event.entity';
import { FileEntity } from '../entities/file.entity';
import { PaymentEntity } from '../entities/payment.entity';
import { SponsorEntity } from '../entities/sponsor.entity';
import { EmailEntity } from '../entities/email.entity';
import { TicketTypeEntity } from '../entities/ticket-type.entity';
import { TransactionEntity } from '../entities/transaction.entity';
import { RegistrationEntity } from '../entities/registration.entity';
import { TicketEntity } from '../entities/ticket.entity';

export const coreProviders = [
  {
    provide: CoreRepositoryEnum.FEEDBACK_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FeedbackEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.CATALOGUE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CatalogueEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.ADDRESS_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AddressEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.COLLABORATOR_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CollaboratorEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.EVENT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EventEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.FILE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FileEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.NOTIFICATION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EmailEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.PAYMENT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PaymentEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.SPONSOR_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SponsorEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.TICKET_TYPE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TicketTypeEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.REGISTRATION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RegistrationEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.TRANSACTION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TransactionEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
  {
    provide: CoreRepositoryEnum.TICKET_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TicketEntity),
    inject: [DatabaseProviderEnum.POSTGRES],
  },
];
