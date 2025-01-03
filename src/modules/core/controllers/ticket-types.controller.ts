import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTicketTypeDto } from '../dto/ticket_type/create-ticket-type.dto';
import { UpdateTicketTypeDto } from '../dto/ticket_type/update-ticket-type.dto';
import { TicketTypesService } from '../services';

@Controller('ticket-types')
export class TicketTypesController {
    constructor(private readonly ticketTypesService:TicketTypesService){}

    @Post()
    create(@Body() createTicketTypeDto:CreateTicketTypeDto){
        return 'This action adds ticket type created';
    }

    @Get()
    findAll(){
        return 'This action returns ticket types Found';
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return `This action returns a ${id} ticket type`;
    }

    @Patch()
    async update(@Param('id') id:string, @Body() updateTicketTypeDto:UpdateTicketTypeDto){
        await this.ticketTypesService.update(id, updateTicketTypeDto)

        return `This action update a ${id} ticket type`
    }

    @Delete(':id')
    delete(@Param('id')id:string){
        return `This action remove a ${id} ticket type`
    }
}
