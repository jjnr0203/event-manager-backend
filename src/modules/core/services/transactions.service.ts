import { Controller, Inject, Injectable } from '@nestjs/common';
import { TransactionEntity } from '../entities/transaction.entity';
import { CreateTransactionDto } from '../dto';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
    constructor(
        @Inject(CoreRepositoryEnum.TRANSACTION_REPOSITORY)
        private repository: Repository<TransactionEntity>,
      ) {}
    
      async create(payload: CreateTransactionDto) {
        const transaction = await this.repository.create(payload);
        await this.repository.save(transaction);
        return transaction;
      }
    
      async findAll() {
        const transaction = await this.repository.find();
        return transaction;
      }
    
      async findOne(id: string) {
        const transaction = await this.repository.findOne({
          where: { id },
        });
        return transaction;
      }
    
      async delete(id: string) {
        const transaction = await this.repository.softDelete(id);
        return transaction;
      }
}
