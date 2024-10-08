import { Inject, Injectable } from '@nestjs/common';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { PaymentEntity } from '../entities/payment.entity';
import { CreatePaymentDto } from '../dto/payment/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(CoreRepositoryEnum.PAYMENT_REPOSITORY)
    private repository: Repository<PaymentEntity>,
  ) {}

  async create(payload: CreatePaymentDto) {
    const payment = await this.repository.create(payload);
    await this.repository.save(payment);
    return payment;
  }

  async findAll() {
    const payment = await this.repository.find();
    return payment;
  }

  async findOne(id: string) {
    const payment = await this.repository.findOne({
      where: { id },
    });
    return payment;
  }

  async delete(id: string) {
    const payment = await this.repository.softDelete(id);
    return payment;
  }
}
