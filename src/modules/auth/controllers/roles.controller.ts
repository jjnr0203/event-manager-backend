import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInformationUserDto, UpdateInformationUserDto } from '../dto';
import { RolesService } from '../services/roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() payload: CreateInformationUserDto) {
    const role = await this.rolesService.create(payload);
    return role;
  }

  @Get()
  async findAll() {
    const roles = await this.rolesService.findAll();
    return roles;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const role = await this.rolesService.findOne(id);
    return role;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateInformationUserDto,
  ) {
    const role = await this.rolesService.update(id, payload);
    return role;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const role = await this.rolesService.delete(id);
    return role;
  }
}
