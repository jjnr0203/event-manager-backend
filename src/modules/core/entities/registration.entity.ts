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
  registeredAt: string;

  @Column({
    type: Boolean,
    name: 'attended',
    nullable: false,
  })
  attended: string;

  @ManyToOne(() => EventEntity, (events)=> events.registrations)
  @JoinColumn({ name: 'event_id', referencedColumnName: 'id', foreignKeyConstraintName: 'registration_event_id_foreign_key'})
  event_id: EventEntity;

  @ManyToOne(() => UserEntity, (users)=> users.registrations)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'registration_user_id_foreign_key'})
  user_id: UserEntity;

  @OneToMany(()=>CollaboratorEntity, (collaborator) => collaborator.id)
  collaborators:CollaboratorEntity[];

}
