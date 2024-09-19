import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('roles', { schema: 'auth' })
export class RoleEntity {
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

  /** Columns **/
  @Column({
    name: 'code',
    type: 'integer',
    unique: true,
    comment: 'Codigo del rol',
  })
  code: number;

  @Column({
    name: 'name',
    type: 'varchar',
    unique: true,
    comment: 'Nombre del rol',
  })
  name: string;
  
}
