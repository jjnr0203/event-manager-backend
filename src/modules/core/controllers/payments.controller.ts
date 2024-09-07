import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PaymentsService } from '../services';
import { UpdatePaymentDto } from '../dto/payment/update-payment.dto';

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
