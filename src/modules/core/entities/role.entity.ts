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

@Entity('roles', { schema: 'core' })
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
    type: 'varchar',
    unique: true,
    comment: 'Codigo del rol',
  })
  code: string;

  @Column({
    name: 'name',
    type: 'varchar',
    unique: true,
    comment: 'Nombre del rol',
  })
  name: string;

  /** Before Actions **/
  @BeforeInsert()
  @BeforeUpdate()
  async setCode() {
    if (!this.code) {
      return;
    }
    this.code = this.code.toLowerCase().trim();
  }
}
