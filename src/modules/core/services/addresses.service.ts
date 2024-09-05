import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddresDto } from '../dto';
import { UpdateAddresDto } from '../dto';
import { AddressEntity } from '../entities/address.entity';
import { Repository } from 'typeorm';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';

@Injectable()
export class AddressesService {
    constructor(
        @Inject(CoreRepositoryEnum.ADDRESS_REPOSITORY)
        private repository: Repository<AddressEntity>
    ) {}
    
    async create(payload: CreateAddresDto) {
        const address = await this.repository.create(payload);
        await this.repository.save(address);
        return address;
    }
    async findAll() {
        console.log('ejecutado service find all');
        const address = await this.repository.find()
        console.log(address, 'service');
        return address
    }
    async findOne(id: string) {
        const address = await this.repository.findOne({
            where:{id:id}
          })
          return event
    }
    async update(id: string, payload: UpdateAddresDto) {
        const address = await this.repository.preload({ id:id, ...payload });
        if (!address) throw new NotFoundException('Address not found');
        try {
        await this.repository.save(address);
        return address;
        } catch (error) {
        console.log(error);

        return 'Error updating the event';
        }
    }
    async delete(id: string) {
        const address = await this.repository.softDelete(id);
        return address;
    }
}
