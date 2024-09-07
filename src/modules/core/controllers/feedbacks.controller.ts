import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FeedbacksService } from '../services';
import { UpdateFeedbackDto } from '../dto/feedback/update-feedback.dto';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}
  @Get()
  findAll() {
    return 'This action returns all feedbacks';
  }

  @Get(':id')
  findOne() {
    return 'should return an feedback';
  }

  @Post()
  create() {
    return 'should return a created feedback';
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ) {
    return await this.feedbacksService.update(id, updateFeedbackDto);
  }

  @Delete(':id')
  delete() {
    return 'should delete an feedback';
  }
}
