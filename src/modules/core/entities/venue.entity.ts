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
import { LocationEntity } from './location.entity';
import { AddressEntity } from './address.entity';

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
    name: 'address',
    type: 'varchar',
    nullable: false,
  })
  address: string;

  @Column({
    name: 'capacity',
    type: 'int',
    nullable: false,
  })
  capacity: number;

  @Column({
    name: 'is_limited',
    type: Boolean,
    nullable: false,
  })
  isLimited: string;

  @OneToMany(()=>LocationEntity, (locations)=>locations.id)
  locations: LocationEntity[];

  @OneToOne(()=>AddressEntity)
  @JoinColumn({name:'address_id', referencedColumnName:'id'})
  addresses:AddressEntity
}
