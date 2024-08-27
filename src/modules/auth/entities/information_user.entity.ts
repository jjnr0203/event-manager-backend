import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { FileEntity } from 'src/modules/core/entities/file.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('information_users', { schema: 'auth' })
export class InformationUserEntity {
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
    name: 'name',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'lastname',
    type: 'varchar',
    nullable: false,
  })
  lastname: string;

  @Column({
    name: 'phone',
    type: 'varchar',
    nullable: false,
  })
  phone: string;

  @ManyToOne(() => UserEntity, (users) => users.id)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'information_organizator_user_id_foreign_key',
  })
  user: UserEntity;

  @OneToOne(() => FileEntity)
  @JoinColumn({ name: ' file_id' })
  file: FileEntity;
} 
