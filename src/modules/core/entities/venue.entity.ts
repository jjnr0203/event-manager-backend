import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AddressEntity } from './address.entity';
import { EventEntity } from './event.entity';

@Entity('venues', { schema: 'core' })
export class VenueEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Fecha de creación',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Registro de borrado',
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
    type: 'int',
  })
  capacity: number;

  @Column({
    name: 'is_limited',
    type: Boolean,
    nullable: false,
  })
  isLimited: boolean;

  @OneToMany(()=>EventEntity, (event)=>event.id)
  events: EventEntity[];

  @OneToOne(()=>AddressEntity)
  @JoinColumn({name:'address_id'})
  address:AddressEntity
}
