import { Body, Controller, Inject, Post } from '@nestjs/common';
import { TokenInjectionEnum } from 'src/shared/enums/token-injection.enum';
import { ClientProxy } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Controller('emails')
export class EmailsController {
  constructor(
    @Inject(TokenInjectionEnum.EMAIL_SERVICE)
    private readonly emailClient: ClientProxy,
  ) {}

  @Post()
  async sendEmail(@Body() payload: any) {
    return this.emailClient.send('sendEmail', payload).pipe(
      catchError((error) => {
        console.log(error);
        return error;
      }),
    );
  }
}
