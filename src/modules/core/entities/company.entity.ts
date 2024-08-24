import { UserEntity } from 'src/modules/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('companies', { schema: 'core' })
export class CompanyEntity {
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
    name: 'email',
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'phone',
    type: 'varchar',
    nullable: false,
  })
  phone: string;

  @Column({
    name: 'acronym',
    type: 'varchar',
    nullable: false,
  })
  acronym: string;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: false,
  })
  description: string;

  @Column({
    name: 'social_media',
    type: 'varchar',
    nullable: false,
  })
  socialMedia: string;

  @ManyToOne(() => UserEntity, (users)=> users.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'information_organizator_user_id_foreign_key'})
  user_id: UserEntity;
}