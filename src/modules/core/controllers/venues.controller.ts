import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateVenueDto, UpdateVenueDto } from '../dto';
import { VenuesService } from '../services/venues.service';

@Controller('venues')
export class VenuesController {
    constructor(private readonly venuesService: VenuesService) {}

    @Post()
   async create(@Body() payload: CreateVenueDto) {
    const catalogue = await this.venuesService.create(payload);
    return catalogue;
  }

  @Get()
  async findAll() {
    const venues = await this.venuesService.findAll();
    return venues;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const venue = await this.venuesService.findOne(id);
    return venue;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() payload: UpdateVenueDto) {
    const venue = await this.venuesService.update(id, payload);
    return venue;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const venue = await this.venuesService.delete(id);
    return venue
  }
}
