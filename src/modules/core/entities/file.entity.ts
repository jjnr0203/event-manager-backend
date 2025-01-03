import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('files', { schema: 'core' })
export class FileEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Unique identifier for the file record',
  })
  id: string;

  @Column({
    name: 'url',
    type: 'text',
    comment: 'URL to access the file stored on Cloudinary',
  })
  url: string;

  @Column({
    name: 'public_id',
    type: 'varchar',
    length: 255,
    unique: true,
    comment: 'Unique identifier generated by Cloudinary for the file',
  })
  publicId: string;

  @Column({
    name: 'resource_type',
    type: 'varchar',
    length: 50,
    comment: 'Type of the resource (e.g., image, video, raw)',
  })
  resourceType: string;

  @Column({
    name: 'format',
    type: 'varchar',
    length: 10,
    comment: 'Format or extension of the file (e.g., jpg, png, mp4)',
  })
  format: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Timestamp of when the file was uploaded',
  })
  createdAt: Date;

  @Column({
    type:'varchar',
    nullable:false
  })
  entityId:string;
}
