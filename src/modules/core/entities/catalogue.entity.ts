import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('catalogues', { schema: 'core' })
export class CatalogueEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  createdAt: Date;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'type',
    type: 'varchar',
    nullable: false,
  })
  type: string;

  @Column({
    name: 'code',
    type: 'int',
    nullable: false,
  })
  code: number;
}
