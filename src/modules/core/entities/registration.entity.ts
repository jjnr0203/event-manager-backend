import { register } from 'module';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}
