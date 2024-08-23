import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('informations_organizators', { schema: 'core' })
export class InformationOrganizator {
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
    name: 'logo',
    type: 'varchar',
    nullable: false,
  })
  logo: string;

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
}
