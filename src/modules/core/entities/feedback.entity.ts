import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { EventEntity } from './event.entity';

@Entity('feedbacks', { schema: 'core' })
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createdAt: Date;

  @Column({ type: 'int', name: 'rating', nullable: false })
  rating: string;

  @Column({ type: 'varchar', name: 'comment', nullable: false })
  comment: string;

  @Column({ type: Date, name: 'feedback_date', nullable: false })
  feedback_date: string;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;

  @ManyToOne(() => EventEntity, (event) => event.id)
  @JoinColumn({ name: 'event_id', referencedColumnName: 'id' })
  event: UserEntity;
}
