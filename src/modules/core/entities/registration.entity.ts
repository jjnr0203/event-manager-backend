import { register } from 'module';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventEntity } from './event.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { CollaboratorEntity } from './collaborator.entity';

@Entity('registrations', { schema: 'core' })
export class RegistrationEntity {
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
    type: 'timestamp',
    name: 'registed_at',
    nullable: false,
  })
  registeredAt: Date;

  @Column({
    type: Boolean,
    name: 'attended',
    nullable: false,
  })
  attended: boolean;

  @ManyToOne(() => EventEntity, (event)=> event.id)
  @JoinColumn({ name: 'event_id', foreignKeyConstraintName: 'registration_event_id_foreign_key'})
  event: EventEntity;

  @ManyToOne(() => UserEntity, (user)=> user.id)
  @JoinColumn({ name: 'user_id', foreignKeyConstraintName: 'registration_user_id_foreign_key'})
  user: UserEntity;

  @OneToMany(()=>CollaboratorEntity, (collaborator) => collaborator.id)
  collaborators:CollaboratorEntity[];

}
