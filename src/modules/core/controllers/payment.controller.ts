import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentSessionDto } from '../dto/payment/payment.dto';
import { PaymentService } from '../services/payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async createOrder(@Body() paymentSessionDto: PaymentSessionDto) {
    return await this.paymentService.createOrder(paymentSessionDto);
  }

  @Post(':id/capture-order')
  async captureOrder(@Param('id') id: string) {
    return this.paymentService.captureOrder(id);
  }

  @Get('success')
  async successOrder() {
    return 'successed';
  }
  @Patch('cancel/:id')
  async cancelOrder(@Param('id') id: string) {
    const order = await this.paymentService.cancelOrder(id);

    return order;
  }
}
