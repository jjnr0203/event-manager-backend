import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RegistrationEntity } from './registration.entity';

@Entity('collaborators', { schema: 'core' })
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

  @ManyToOne(() => RegistrationEntity, (registrations)=> registrations.id)
  @JoinColumn({ name: 'registration_id', referencedColumnName: 'id', foreignKeyConstraintName: 'collaborator_registration_id_foreign_key'})
  resgistration_id: RegistrationEntity;
}
