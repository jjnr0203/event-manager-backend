import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VenueEntity } from './venue.entity';
import { TicketEntity } from './ticket.entity';

@Entity('sections', { schema: 'core' })
export class SectionEntity{
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
  capacity: number;

  @Column({
    name: 'disponibility',
    type: 'boolean',
    nullable: false,
  })
  disponibility: boolean;
  
  @ManyToOne(() => VenueEntity, (venue) => venue.id)
  @JoinColumn({ name: 'venue_id', foreignKeyConstraintName: 'location_venue_id_foreign_key'})
  venue: VenueEntity;

  @OneToMany(()=>TicketEntity, (ticket) => ticket.id)
  tickets:TicketEntity[]
}
