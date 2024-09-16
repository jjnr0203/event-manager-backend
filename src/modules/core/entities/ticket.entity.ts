import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TicketTypeEntity } from './ticket-type.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { EventEntity } from './event.entity';

@Entity('tickets', { schema: 'core' })
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createdAt: Date;

  @Column({
    name: 'code',
    type: 'varchar',
    nullable: false,
  })
  code: string;

  @Column({
    name: 'state',
    type: 'boolean',
    nullable: false,
  })
  state: boolean;

  @Column({
    name: 'generated_date',
    type: 'timestamp',
    nullable: false,
  })
  generatedDate: Date;

  @ManyToOne(() => TicketTypeEntity)
  @JoinColumn({
    name: 'ticket_type_id',
    foreignKeyConstraintName: 'ticket_ticket_type_id_fkey',
  })
  ticketType: TicketTypeEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'ticket_user_id_fkey',
  })
  user: UserEntity;

  @ManyToOne(() => EventEntity)
  @JoinColumn({
    name: 'event_id',
    foreignKeyConstraintName: 'ticket_event_id_fkey',
  })
  event: EventEntity;
}
