import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SectionEntity } from './section.entity';

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
    type: 'decimal',
    name: 'price',
    nullable: true,
  })
  price: number;

  @Column({
    name: 'purchase_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  purchaseDate: Date;

  @ManyToOne(() => SectionEntity, (location) => location.id)
  @JoinColumn({
    name: 'location_id',
    foreignKeyConstraintName: 'sponsor_location_id',
  })
  event: SectionEntity;
  
}
