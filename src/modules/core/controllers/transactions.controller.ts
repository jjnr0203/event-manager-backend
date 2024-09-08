import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TransactionsService } from '../services';
import { CreateTransactionDto } from '../dto';
import { UpdateTicketDto } from '../dto/ticket/update-ticket.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    return await this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    const transactions = this.transactionsService.findAll();
    return transactions;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const transaction = this.transactionsService.findOne(id);
    return transaction;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.transactionsService.delete(id);
  }
}
