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

@Entity('sponsors', { schema: 'core' })
export class SponsorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Column({
    name: 'email',
    type: 'text',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'contact',
    type: 'text',
    nullable: false,
  })
  contact: string;

  @ManyToOne(() => EventEntity, (event) => event.id)
  @JoinColumn({
    name: 'event_id',
    foreignKeyConstraintName: 'sponsor_event_id',
  })
  event: EventEntity;
}
