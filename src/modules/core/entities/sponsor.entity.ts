import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sponsors', { schema: 'core' })
export class SponsorEntity {
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
    name: 'email',
    type: 'text',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'contact',
    type: 'text',
    nullable: false,
  })
  contact: string;

  @Column({
    name: 'sponsorship_amount',
    type: 'text',
    nullable: false,
  })
  sponsorShipAmount: string;
}
