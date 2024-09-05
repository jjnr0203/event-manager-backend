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
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() payload: CreateInformationUserDto) {
    const user = await this.usersService.create(payload);
    return user;
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return user;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateInformationUserDto,
  ) {
    const user = await this.usersService.update(id, payload);
    return user;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.usersService.delete(id);
    return user;
  }
}
