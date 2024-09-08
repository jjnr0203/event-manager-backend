import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateEventDto } from '../dto';
import { EventsService } from '../services/events.service';

@Controller('events')
export class EventsController {

    constructor(private readonly eventsService:EventsService){}

    @Get()
    findAll() {
        return 'This action returns all events';
    }
    
    @Get(':id')
    findOne(){
        return 'should return an event'
    }
    
    @Post()
    create(){
        return 'should return a created event'
    }

    @Patch(':id')
    async update(@Param('id') id:string, @Body() updateEventDto: UpdateEventDto){
        return await this.eventsService.update(id, updateEventDto)
    }
    
    @Delete(':id')
    delete(){
        return 'should delete an event'
    }

}
