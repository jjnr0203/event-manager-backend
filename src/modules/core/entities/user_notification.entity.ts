import { UserEntity } from 'src/modules/auth/entities/user.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NotificationEntity } from './notification.entity';

@Entity('users_notifications', { schema: 'core' })
export class UserNotificationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestamp',
    comment: 'Fecha de creacion del colaborador',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del colaborador',
  })
  deletedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'user_id',
    foreignKeyConstraintName: 'notification_user_id',
  })
  user: UserEntity;

  @ManyToOne(() => NotificationEntity, (notification) => notification.id)
  @JoinColumn({
    name: 'notification_id',
    foreignKeyConstraintName: 'user_notification_id',
  })
  notification: NotificationEntity;
}
