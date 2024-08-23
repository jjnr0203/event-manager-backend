import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('collaborator', { schema: 'core' })
export class CollaboratorEntity {
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
    type: 'varchar',
    name: 'access_level',
    nullable: false,
  })
  access_level: string;
}
