import { Inject, Injectable } from '@nestjs/common';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { PaymentEntity } from '../entities/payment.entity';
import { CreatePaymentDto } from '../dto/payment/create-payment.dto';
import { UpdatePaymentDto } from '../dto/payment/update-payment.dto';

@Injectable()
export class PaymentsService {
    constructor(
        @Inject(CoreRepositoryEnum.PAYMENT_REPOSITORY)
        private repository: Repository<PaymentEntity>,
    ){}

    async create(payload: CreatePaymentDto){
        const payment = await this.repository.create();
        await this.repository.save(payment);
        return payment;
    }

    async findAll(){
        const payment = await this.repository.find();
        return payment;
    }

    async findOne(id:string){
        const payment = await this.repository.findOne({
            where:{id}
        });
        return payment;
    }

    // async update(id:string, payload:UpdatePaymentDto){
    //     const payment = this.repository.preload({id:id, ...payload});
    // }

    async delete(id:string){
        const payment = await this.repository.softDelete(id);
        return payment;
    }

    
}
