import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { EventEntity } from './event.entity';

@Entity('ticket_type', { schema: 'core' })
export class TicketTypeEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de creacion del archivo',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del archivo',
  })
  deletedAt: Date;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'capacity',
    type: 'integer',
    nullable: false,
  })
  disponibility: number;

  @Column({
    name: 'price',
    type: 'decimal',
    nullable: false,
  })
  price: number;

  @Column({
    name: 'is_available',
    type: 'boolean',
  })
  isAvailable: boolean;
  
  @ManyToOne(() => EventEntity, (event) => event.id)
  @JoinColumn({name: 'event_id'})
  event:EventEntity;
}