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
} from 'typeorm';
import { TicketEntity } from './ticket.entity';

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
    type: 'boolean',
    name: 'status',
    nullable: false,
  })
  status: boolean;

  @Column({
    type: 'timestamp',
    name: 'transaction_date',
    nullable: false,
  })
  transaction_date: Date;

  @Column({
    type: 'boolean',
    name: 'method',
    nullable: false,
  })
  method: boolean;

  @ManyToOne(()=>UserEntity, (users)=>users.payments)
  @JoinColumn({name:'user_id', referencedColumnName:'id'})
  user_id: UserEntity;

  @ManyToOne(()=>TicketEntity, (tickets)=>tickets.payments)
  @JoinColumn({name:'ticket_id', referencedColumnName:'id'})
  ticket_id: TicketEntity;

  
}
