import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

@Entity('addresses', { schema: 'core' })
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestamp',
    comment: 'Fecha de creacion del colaborador',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestamp',
    comment: 'Fecha de actualizacion del colaborador',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del colaborador',
  })
  deletedAt: Date;

  @Column({
    name: 'latitude',
    type: 'varchar',
    nullable: false,
  })
  latitude: string;

  @Column({
    name: 'altitude',
    type: 'varchar',
    nullable: false,
  })
  altitude: string;

  @Column({
    name: 'reference',
    type: 'varchar',
    nullable: false,
  })
  reference: string;
}
