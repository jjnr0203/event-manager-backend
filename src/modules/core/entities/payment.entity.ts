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
    type: 'timestamp',
    nullable: false,
  })
  amount: Date;
  
  @Column({
    name: 'state',
    type: 'varchar',
    nullable: false,
  })
  state: string;

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
  cuantity: Date;

  @OneToOne(()=>PaymentEntity, (payment)=>payment.id)
  paymentMethod: PaymentEntity;

  @ManyToOne(()=>UserEntity, (user)=>user.id)
  @JoinColumn({name:'user_id', referencedColumnName:'id'})
  user: UserEntity;

  @ManyToOne(()=>TicketTypeEntity, (ticket)=>ticket.id)
  @JoinColumn({name:'ticket_type_id'})
  ticketType: TicketTypeEntity;

  @ManyToOne(()=>TransactionEntity, (transaction)=>transaction.id)
  @JoinColumn({name:'payment_transaction_id'})
  transaction: TransactionEntity;
  
}
