import {
  Controller,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from '../dto/payment/create-payment.dto';
import { PaymentEntity } from '../entities/payment.entity';
import { RegistrationEntity } from '../entities/registration.entity';
import { CreateNotificationDto, UpdateAddresDto } from '../dto';
import { CreateRegistrationDto } from '../dto/registration/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/registration/update-registration.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class RegistrationsService {
  constructor(
    @Inject(CoreRepositoryEnum.REGISTRATION_REPOSITORY)
    private repository: Repository<RegistrationEntity>,
  ) {}

  async create(payload: CreateRegistrationDto) {
    const registration = await this.repository.create(payload);
    await this.repository.save(payload);
    return registration;
  }

  async findAll() {
    const registration = await this.repository.find();
    return registration;
  }

  async findOne(id: string) {
    const registration = await this.repository.findOne({
      where: { id },
    });
    return registration;
  }

  async update(id: string, payload: UpdateRegistrationDto) {
    const registration = await this.repository.preload({ id, ...payload });

    if (!registration) throw new NotFoundException('Not found');
    try {
      this.repository.save(registration);

      return registration;
    } catch (error) {
      console.error(error);

      return registration;
    }
  }

  async delete(id: string) {
    const registration = await this.repository.softDelete(id);
    return registration;
  }
}
