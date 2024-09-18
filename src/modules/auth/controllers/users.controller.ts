import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthService } from '../services';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {}

  @Post()
  async create(@Body() payload: CreateUserDto) {
    const user = await this.usersService.create(payload);
    const token = await this.authService.login(user.id)
    
    return {token};
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async findProfile(@Request() req) {
    const user = await this.usersService.findOne(req.user.id);
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return await this.usersService.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.usersService.delete(id);
  }
}
