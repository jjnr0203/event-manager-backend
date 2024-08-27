import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserNotificationEntity } from './user_notification.entity';

@Entity('notifications', { schema: 'core' })
export class NotificationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de creacion del archivo',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del archivo',
  })
  deletedAt: Date;

  @Column({
    name: 'title',
    type: 'varchar',
    nullable: false,
  })
  title: string;

  @Column({
    name: 'message',
    type: 'varchar',
    nullable: false,
  })
  message: string;

  @OneToMany(()=>UserNotificationEntity,(userNotification)=>userNotification.id)
  userNotification: UserNotificationEntity[];
}
