import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NotificationsService } from '../services';
import { UpdateNotificationDto } from '../dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @Get()
  findAll() {
    return 'This action returns all notifications';
  }

  @Get(':id')
  findOne() {
    return 'should return an notification';
  }

  @Post()
  create() {
    return 'should return a created notification';
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return await this.notificationsService.update(id, updateNotificationDto);
  }

  @Delete(':id')
  delete() {
    return 'should delete an notification';
  }
}
