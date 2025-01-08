import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { envs } from 'src/config/envs';
import { PaymentSessionDto } from '../dto/payment/payment.dto';
import {
  ApiError,
  CheckoutPaymentIntent,
  Client,
  Environment,
  OrderRequest,
  OrdersController,
} from '@paypal/paypal-server-sdk';
import { CapturedOrder } from 'src/shared/interfaces/capture-order.interface';
import { OrdersService } from './orders.service';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(CoreRepositoryEnum.ORDER_REPOSITORY)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}
  private readonly paypalClient = new Client({
    clientCredentialsAuthCredentials: {
      oAuthClientId: envs.paypalClientId,
      oAuthClientSecret: envs.paypalClientSecret,
    },
    timeout: 0,
    environment: Environment.Sandbox,
  });
  private readonly ordersController = new OrdersController(this.paypalClient);

  async createOrder(payment: PaymentSessionDto) {
    try {
      const orderRequest: OrderRequest = {
        intent: CheckoutPaymentIntent.Capture,

        purchaseUnits: [
          {
            referenceId: payment.orderId,
            customId: payment.orderId,
            amount: {
              value: this.calculateTotalAmount(payment),
              currencyCode: 'USD',
              breakdown: {
                itemTotal: {
                  value: this.calculateTotalAmount(payment),
                  currencyCode: 'USD',
                },
              },
            },
            items: this.getItems(payment),
          },
        ],
      };
      const { body } = await this.ordersController.ordersCreate({
        body: orderRequest,
      });
      if (typeof body === 'string') {
        return JSON.parse(body);
      }

      return body;
    } catch (error) {
      console.log(error.message);

      if (error instanceof ApiError) {
        // const { statusCode, headers } = error;
        throw new Error(error.message);
      }
    }
  }

  async captureOrder(orderId: string) {
    try {
      const { body } = await this.ordersController.ordersCapture({
        id: orderId,
      });
      let parseBody: CapturedOrder;
      if (typeof body === 'string') parseBody = JSON.parse(body);

      if (parseBody.status === 'COMPLETED') {
        const orderId = parseBody.purchase_units[0].reference_id;
        this.payOrder(orderId);
      }
      return parseBody;
    } catch (error) {
      console.log(error);
      if (error instanceof ApiError) {
        throw new BadRequestException(`Failed to capture order`);
      }
      throw new BadRequestException(
        'Error inesperado al capturar la orden de PayPal',
      );
    }
  }


  private getItems(payment: PaymentSessionDto) {
    return payment.items.map((item) => ({
      name: item.name,
      quantity: item.quantity.toString(),
      unitAmount: {
        value: item.price.toString(),
        currencyCode: 'USD',
      },
    }));
  }
  private calculateTotalAmount(payment: PaymentSessionDto): string {
    const total = payment.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return total.toFixed(2);
  }

  async payOrder(orderId: string) {
    const order = await this.orderRepository.findOne({
      where: { id: orderId },
      relations: ['orderDetails'],
    });
    order.status = 'completed';
    order.paid = true;
    return await this.orderRepository.save(order);
  }

  async cancelOrder(orderId: string) {
    try {
      const { body } = await this.ordersController.ordersGet({
        id: orderId,
      });

      let parseBody: CapturedOrder;

      if (typeof body === 'string') parseBody = JSON.parse(body);
      const id = parseBody.purchase_units[0].reference_id;

      const order = await this.orderRepository.findOne({
        where: { id: id },
      });
      order.status = 'cancelled';
      return await this.orderRepository.save(order);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
