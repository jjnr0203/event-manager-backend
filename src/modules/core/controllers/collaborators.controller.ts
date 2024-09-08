import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CollaboratorsService } from '../services';
import { CreateCollaboratorDto, UpdateCollaboratorDto } from '../dto';

@Controller('collaborators')
export class CollaboratorsController {
  constructor(private readonly collaboratorsService: CollaboratorsService) {}

  @Post()
  async create(@Body() payload: CreateCollaboratorDto) {
    return await this.collaboratorsService.create(payload);
  }

  @Get()
  async findAll() {
    const collaborators = await this.collaboratorsService.findAll();
    return collaborators;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const collaborator = await this.collaboratorsService.findOne(id);
    return collaborator;
  }

  @Patch()
  async update(
    @Param('id') id: string,
    @Body() updateCollaboratorDto: UpdateCollaboratorDto,
  ) {
    return await this.collaboratorsService.update(id, updateCollaboratorDto);
  }

  @Delete('id')
  async delele(@Param('id') id: string) {
    return await this.collaboratorsService.delete(id);
  }
}
