import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feedbacks', { schema: 'core' })
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt:Date;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: ()=> 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createdAt: Date;

  @Column({type: 'int', name:'rating', nullable:false})
  rating: string;

  @Column({type: 'varchar', name: 'comment', nullable:false})
  comment: string;

  @Column({type: Date , name: 'feedback_date', nullable:false})
  feedback_date: string;

}
