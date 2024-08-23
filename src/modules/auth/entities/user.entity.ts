import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users', { schema: 'core' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Fecha de creación',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Registro de borrado',
  })
  deletedAt: Date;

  @Column({
    name: 'user_name',
    type: 'varchar',
    nullable: false,
  })
  userName: string;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    nullable: false,
  })
  lastName: string;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'identification',
    type: 'int',
    nullable: false,
  })
  identification: number;
}
