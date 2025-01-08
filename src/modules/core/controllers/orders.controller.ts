import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { CreateOrderDto } from '../dto/orders/create-order.dto';
import { OrdersService, TicketsService } from '../services';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly ticketsService: TicketsService,
  ) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const order = await this.ordersService.create(createOrderDto);
    const paymentSession = await this.ordersService.createPaymentSession(order);
    return paymentSession;
  }

  @Get()
  async findAll() {
    const orders = await this.ordersService.findAll();
    return orders;
  }

  @Get('user/:id')
  async findOrdersByUser(@Param('id') userId: string) {
    const orders = await this.ordersService.findByUser(userId);
    return orders;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const order = await this.ordersService.findOne(id);
    return order;
  }
 
  // @MessagePattern('payOrder')
  // async payOrder(@Payload() orderId: string) {
  //   const order = await this.ordersService.payOrder(orderId);
  //   return order;
  // }

  // @MessagePattern('cancelOrder')
  // async cancelOrder(@Payload() orderId: string) {
  //   const order = await this.ordersService.payOrder(orderId);
  //   return order;
  // }

  // @MessagePattern('removeOrder')
  // async remove(@Payload() id: string) {
  //   const result = await this.ordersService.remove(id);
  //   return result;
  // }

  // @MessagePattern('generateTickets')
  // async generateTickets(@Res() res: Response, @Payload() orderId : string) {
  //   const pdfDoc = await this.ticketsService.generateTickets(orderId);

  //   return new Promise((resolve, reject) => {
  //     const chunks = [];

  //     pdfDoc.on('data', (chunk) => chunks.push(chunk));
  //     pdfDoc.on('end', () => {
  //       const pdfBuffer = Buffer.concat(chunks);
  //       resolve(pdfBuffer);
  //     });

  //     pdfDoc.end();
  //   });
  // }
}
