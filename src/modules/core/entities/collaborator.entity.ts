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
import { RegistrationEntity } from './registration.entity';
import { EventEntity } from './event.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { CatalogueEntity } from './catalogue.entity';

@Entity('collaborators', { schema: 'core' })
export class CollaboratorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de creacion del colaborador',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
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

  @ManyToOne(() => CatalogueEntity, (access_level) => access_level.id)
  @JoinColumn({
    name:'access_level_id',
    foreignKeyConstraintName: 'collaborator_access_level_id',
  })
  access_level: CatalogueEntity;

  @ManyToOne(() => EventEntity, (event) => event.id, {cascade:true})
  @JoinColumn({
    name: 'event_id',
    foreignKeyConstraintName: 'collaborator_event_id',
  })
  event: EventEntity;

  @ManyToOne(() => UserEntity, (user) => user.id, {cascade:true})
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'collaborator_user_id',
  })
  user: UserEntity;
}
