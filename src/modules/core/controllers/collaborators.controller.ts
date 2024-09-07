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
import {
  CreateCollaboratorDto,
  UpdateCollaboratorDto,
} from '../dto';

@Controller('collaborators')
export class CollaboratorsController {
  constructor(private readonly collaboratorsService: CollaboratorsService) {}

  @Post()
  create(@Body() payload: CreateCollaboratorDto) {
    return 'This action adds a new collaborator';
  }

  @Get()
  findAll() {
    return 'This action returns all collaborators';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a ${id} collaborator`;
  }

  @Patch()
  async update(@Param('id') id: string, @Body() updateCollaboratorDto: UpdateCollaboratorDto) {
    return await this.collaboratorsService.update(id, updateCollaboratorDto);
  }

  @Delete('id')
  delele() {
    return 'should delete an event';
  }
}
