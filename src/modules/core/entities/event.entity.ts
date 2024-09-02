import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
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
import { VenueEntity } from './venue.entity';

@Entity('events', { schema: 'core' })
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
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

  @Column({
    type: 'boolean',
    name: 'is_public',
    nullable: false,
  })
  isPublic: boolean;

  @ManyToOne(() => CatalogueEntity, (category) => category.id)
  @JoinColumn({ name: 'category_id', foreignKeyConstraintName: 'event_catalogue_id_foreign_key'})
  category: CatalogueEntity;

  @ManyToOne(() => UserEntity, (user)=> user.id)
  @JoinColumn({ name: 'organizer_id', foreignKeyConstraintName: 'event_user_id_foreign_key'})
  organizer: UserEntity;

  @ManyToOne(() => VenueEntity, (venue)=> venue.id)
  @JoinColumn({ name: 'venue_id', foreignKeyConstraintName: 'event_venue_id_foreign_key'})
  venue: VenueEntity;

  @OneToMany(()=>SponsorEntity, (sponsor) => sponsor.id)
  sponsors:SponsorEntity[]

  @OneToMany(()=>FileEntity, (file) => file.id)
  files:FileEntity[]

  @OneToMany(()=>RegistrationEntity, (registration) => registration.id)
  registrations:RegistrationEntity[]

  @OneToMany(()=>FeedbackEntity, (feedback) => feedback.id)
  feedback:FeedbackEntity[]

}
