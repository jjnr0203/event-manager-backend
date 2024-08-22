import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('events', { schema: 'core' })
export class EventEmtity {
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
    name: 'created_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt:Date;

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
  state:string;

  @Column({
    type: Boolean,
    name: 'free_access',
    nullable: false,
  })
  free_access: Boolean;
}
