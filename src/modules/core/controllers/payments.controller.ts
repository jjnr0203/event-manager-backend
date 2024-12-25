import {
  Controller,
  Delete,
  Get,
  Post,
} from '@nestjs/common';
import { PaymentsService } from '../services';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  findAll() {
    return 'This action returns all events';
  }

  @Get(':id')
  findOne() {
    return 'should return an event';
  }

  @Post()
  create() {
    return 'should return a created event';
  }

  @Delete(':id')
  delete() {
    return 'should delete an event';
  }
}
