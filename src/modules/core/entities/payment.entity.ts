import { UserEntity } from 'src/modules/auth/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { TicketEntity } from './ticket.entity';
import { TicketTypeEntity } from './ticket-type.entity';
import { TransactionEntity } from './transaction.entity';
import { CatalogueEntity } from './catalogue.entity';

@Entity('payments', { schema: 'core' })
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestamp',
    comment: 'Fecha de creacion del pago',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestamp',
    comment: 'Fecha de actualizacion del pago',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del pago',
  })
  deletedAt: Date;

  @Column({
    name: 'amount',
    type: 'decimal',
    nullable: false,
    precision: 10,
    scale: 2,
  })
  amount: number;

  @ManyToOne(() => CatalogueEntity, (catalogue) => catalogue.id)
  @JoinColumn({
    name: 'state_id',
    foreignKeyConstraintName: 'payments_state_id',
  })
  state: CatalogueEntity;

  @Column({
    name: 'purchase_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  purchaseDate: Date;

  @Column({
    name: 'cuantity',
    type: 'int',
    nullable: false,
  })
  cuantity: number;

  @ManyToOne(() => CatalogueEntity, (catalogue) => catalogue.id)
  @JoinColumn({
    name: 'payment_method_id',
    foreignKeyConstraintName: 'payments_payment_method_id',
  })
  paymentMethod: CatalogueEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;

  @ManyToOne(() => TicketTypeEntity, (ticketType) => ticketType.id)
  @JoinColumn({ name: 'ticket_type_id' })
  ticketType: TicketTypeEntity;

  @ManyToOne(() => TransactionEntity, (transaction) => transaction.id)
  @JoinColumn({ name: 'payment_transaction_id' })
  transaction: TransactionEntity;
}
