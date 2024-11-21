import { Controller, Delete, Get, Inject, Post } from '@nestjs/common';
import { TokenInjectionEnum } from 'src/shared/enums/token-injection.enum';
import { ClientProxy } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Controller('emails')
export class EmailsController {
  constructor(
    @Inject(TokenInjectionEnum.EMAIL_SERVICE)
    private readonly emailClient: ClientProxy,
  ) {}

  @Get()
  async findAll() {
    return this.emailClient.send('findAllEmails', {}).pipe(
      catchError((error) => {
        console.log(error);
        return error;
      }),
    );
  }

  @Get(':id')
  findOne() {
    return this.emailClient.send('findOneEmail', {});
  }

  @Post()
  create() {
    return 'should return a created notification';
  }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateNotificationDto: UpdateNotificationDto,
  // ) {
  //   return await this.notificationsService.update(id, updateNotificationDto);
  // }

  @Delete(':id')
  delete() {
    return 'should delete an notification';
  }
}
