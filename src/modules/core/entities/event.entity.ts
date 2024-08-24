import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CatalogueEntity } from './catalogue.entity';
import { SponsorEntity } from './sponsor.entity';
import { FeedbackEntity } from './feedback.entity';
import { FileEntity } from './file.entity';
import { RegistrationEntity } from './registration.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';

@Entity('events', { schema: 'core' })
export class EventEntity {
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
    type: 'varchar',
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'description',
    nullable: false,
  })
  description: string;

  @Column({
    type: Date,
    name: 'start_date',
    nullable: false,
  })
  start_date: Date;

  @Column({
    type: Date,
    name: 'end_date',
    nullable: false,
  })
  end_date: Date;

  @Column({
    type: 'varchar',
    name: 'state',
    nullable: false,
  })
  state: string;
  feedbacks: any;

  @ManyToOne(() => CatalogueEntity, (catalogues) => catalogues.id)
  @JoinColumn({ name: 'catalogue_id', referencedColumnName: 'id', foreignKeyConstraintName: 'event_catalogue_id_foreign_key'})
  catalogue_id: CatalogueEntity;

  @ManyToOne(() => UserEntity, (users)=> users.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'event_user_id_foreign_key'})
  user_id: UserEntity;

  @OneToMany(()=>SponsorEntity, (sponsors) => sponsors.id)
  sponsors:SponsorEntity[]

  @OneToMany(()=>FileEntity, (files) => files.id)
  files:FileEntity[]

  @OneToMany(()=>RegistrationEntity, (registrations) => registrations.id)
  registrations:RegistrationEntity[]

  @OneToMany(()=>FeedbackEntity, (feedbacks) => feedbacks.id)
  feedback:FeedbackEntity[]


}
