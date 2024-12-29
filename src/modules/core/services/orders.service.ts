import {
  Injectable,
  Inject,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { PaymentService } from './payment.service';
import { TicketTypesService } from './ticket-types.service';
import { CreateOrderDto } from '../dto/orders/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(CoreRepositoryEnum.ORDER_REPOSITORY)
    private readonly orderRepository: Repository<OrderEntity>,
    private readonly paymentService: PaymentService,
    private readonly ticketTypesService: TicketTypesService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const ticketTypes = await this.ticketTypesService.validateTicketTypes(
      createOrderDto.orderDetails,
    );

    const totalAmount = createOrderDto.orderDetails.reduce(
      (acc, ticketType) => {
        const price = ticketTypes.find(
          (item) => item.id === ticketType.ticketTypeId,
        ).price;
        const priceCalculated = price * ticketType.quantity;
        return acc + priceCalculated;
      },
      0,
    );

    const order = this.orderRepository.create({
      userId: createOrderDto.userId,
      totalAmount,
      orderDetails: ticketTypes.map((ticketType) => ({
        ticketTypeId: ticketType.id,
        ticketTypeName: ticketType.name,
        price: ticketType.price,
        quantity: createOrderDto.orderDetails.find(
          (item) => item.ticketTypeId === ticketType.id,
        ).quantity,
      })),
    });
    return await this.orderRepository.save(order);
  }

  async createPaymentSession(order: OrderEntity) {
    try {
      return await this.paymentService.createOrder({
        orderId: order.id,
        currency: 'usd',
        items: order.orderDetails.map((item) => ({
          name: item.ticketTypeName,
          quantity: item.quantity,
          price: item.price,
        })),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    return await this.orderRepository.find({
      relations: ['orderDetails'],
    });
  }

  async findByUser(userId: string) {
    const orders = await this.orderRepository.find({
      where: { userId, paid: true },
      relations: {
        orderDetails: true,
      },
    });
    const returnedOrders = await Promise.all(
      orders.map(async (order) => {
        const ticketType = await this.ticketTypesService.findOne(
          order.orderDetails[0].ticketTypeId,
        );
        return { ...order, ticketType };
      }),
    );
    return returnedOrders;
  }

  async findOne(id: string) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['orderDetails'],
    });
    if (!order)
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        message: 'Order not found',
      });

    const ticketType = await this.ticketTypesService.findOne(
      order.orderDetails[0].ticketTypeId,
    );

    return { ...order, ticketType };
  }

  async payOrder(id: string) {
    const order = await this.findOne(id);
    order.status = 'completed';
    order.paid = true;
    return await this.orderRepository.save(order);
  }

  async cancelOrder(id: string) {
    const order = await this.findOne(id);
    order.status = 'canceled';
    return await this.orderRepository.save(order);
  }

  async remove(id: string) {
    const order = await this.findOne(id);
    await this.orderRepository.remove(order);
    return { id };
  }
}