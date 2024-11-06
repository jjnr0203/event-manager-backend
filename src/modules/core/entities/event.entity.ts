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
import { CatalogueEntity } from './catalogue.entity';
import { SponsorEntity } from './sponsor.entity';
import { FeedbackEntity } from './feedback.entity';
import { RegistrationEntity } from './registration.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { AddressEntity } from './address.entity';

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

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Column({
    type: 'varchar',
    name: 'name',
    nullable: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'description',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'timestamp',
    name: 'start_date',
    nullable: true,
  })
  start_date: Date;

  @Column({
    type: 'timestamp',
    name: 'end_date',
    nullable: true,
  })
  end_date: Date;

  @ManyToOne(() => CatalogueEntity)
  @JoinColumn({
    name: 'status_id',
    foreignKeyConstraintName: 'event_status_id',
  })
  status: CatalogueEntity;

  @Column({
    type: 'boolean',
    name: 'is_public',
    nullable: true,
  })
  isPublic: boolean;

  fileId: string;

  @ManyToOne(() => CatalogueEntity)
  @JoinColumn({
    name: 'category_id',
    foreignKeyConstraintName: 'event_catalogue_id_foreign_key',
  })
  category: CatalogueEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: 'organizer_id',
    foreignKeyConstraintName: 'event_user_id_foreign_key',
  })
  organizer: UserEntity;

  @ManyToOne(() => AddressEntity)
  @JoinColumn({
    name: 'address_id',
    foreignKeyConstraintName: 'event_address_id_foreign_key',
  })
  address: AddressEntity;

  @Column({
    type:'boolean',
    name:'hasSponsors',
    nullable: true
  })
  hasSponsors:boolean

  @OneToMany(() => SponsorEntity, (sponsor) => sponsor.event)
  sponsors: SponsorEntity[];

  @OneToMany(() => RegistrationEntity, (registration) => registration.event)
  registrations: RegistrationEntity[];

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.event)
  feedback: FeedbackEntity[];
}
