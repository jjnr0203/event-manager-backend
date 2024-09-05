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
export class FeedbacksService {
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
    const feedback = await this.repository.find();
    return feedback;
  }

  async findOne(id: string) {
    const feedback = await this.repository.findOne({
      where: { id },
    });
    return feedback;
  }

  async update(id: string, payload: UpdateFeedbackDto) {
    const feedback = await this.repository.preload({ id: id, ...payload });

    if (!feedback) throw new NotFoundException('Feedback not found');
    try {
      await this.repository.save(feedback);
    } catch (error) {
      console.error(error);
      return 'Error updating feedback';
    }
  }

  async delete(id: string) {
    const feedback = await this.repository.softDelete(id);
    return feedback;
  }
}
