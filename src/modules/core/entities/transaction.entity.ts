import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentEntity } from './payment.entity';

@Entity('transactions', { schema: 'core' })
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de la transaccion',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion de la transaccion',
  })
  deletedAt: Date;

  @Column({
    name: 'state',
    type: 'boolean',
    nullable: false,
  })
  state: boolean;

  @Column({
    name: 'transaction_code',
    type: 'varchar',
    nullable: false,
  })
  transactionCode: string;

  @Column({
    name: 'error_message',
    type: 'varchar',
    nullable: false,
  })
  errorMessage: string;

  @Column({
    name: 'transaction_date',
    type: Date,
    nullable: false,
  })
  transactionDate: Date;

  @OneToMany(() => PaymentEntity, (payment) => payment.id)
  payments: PaymentEntity[];
}
