import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CatalogueEntity } from './catalogue.entity';
@Entity('files', { schema: 'core' })
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de creacion del archivo',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de actualizacion del archivo',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del archivo',
  })
  deletedAt: Date;

  @Column({
    name: 'is_visible',
    type: 'boolean',
    default: true,
    comment: 'true=visible, false=no visible',
  })
  isVisible: boolean;

  /** Foreign Key **/
  @ManyToOne(() => CatalogueEntity, {
    nullable: true,
  })
  @JoinColumn({ name: 'type_id' })
  type: CatalogueEntity;
  @Column({ type: 'uuid', name: 'type_id', comment: 'Tipo de documento' })
  typeId: string;

  /** Columns **/
  @Column({
    name: 'extension',
    type: 'varchar',
    comment: 'Extension ex. .pdf, .xlsx',
  })
  extension: string;

  @Column({
    name: 'name',
    type: 'varchar',
    comment: 'In storage',
  })
  fileName: string;

  @Column({
    name: 'path',
    type: 'varchar',
    comment: '',
  })
  path: string;

  @Column({
    name: 'size',
    type: 'float',
    comment: 'Size file in bytes',
  })
  size: number;
}
