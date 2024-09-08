import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TransactionsService } from '../services';
import { CreateTransactionDto } from '../dto';
import { UpdateTicketDto } from '../dto/ticket/update-ticket.dto';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService:TransactionsService){}

    @Post()
    create(@Body() createTransactionDto:CreateTransactionDto){
        return 'This action adds transaction created';
    }

    @Get()
    findAll(){
        return 'This action returns transactions Found';
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return `This action returns a ${id} transaction`;
    }

    @Delete(':id')
    delete(@Param('id')id:string){
        return `This action remove a ${id} transaction`
    }
}
