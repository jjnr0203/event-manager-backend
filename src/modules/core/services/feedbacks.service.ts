import {
  Controller,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { FeedbackEntity } from '../entities/feedback.entity';
import { CreateFeedbackDto } from '../dto/feedback/create-feedback.dto';
import { UpdateFeedbackDto } from '../dto/feedback/update-feedback.dto';

@Injectable()
export class FeedbacksServices {
  constructor(
    @Inject(CoreRepositoryEnum.FEEDBACK_REPOSITORY)
    private repository: Repository<FeedbackEntity>,
  ) {}

  async create(payload: CreateFeedbackDto) {
    const feedback = await this.repository.create(payload);
    await this.repository.save(feedback);
    return feedback;
  }

  async findAll() {
    console.log('execute the service find all');
    const feedback = await this.repository.find();
    console.log(feedback, 'service');
    return feedback;
  }

  async findOne(id: string) {
    const feedback = await this.repository.find({
      where: { id },
    });
    console.log('Feedback Found');
    return feedback;
  }

  async update(id: string, payload: UpdateFeedbackDto) {
    const feedback = await this.repository.preload({ id: id, ...payload });

    if(!feedback) throw new NotFoundException ('Feedback not found')
        try{
            await this.repository.save(feedback)
        }catch (error){
            console.error(error);
        }
  }

  async delete(id:string){
    const feedback = await this.repository.softDelete(id)
    console.log(' feedback deleted')
    return feedback;
  }
}
