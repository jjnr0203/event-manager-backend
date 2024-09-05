import { Controller, Injectable } from '@nestjs/common';
import { CreateVenueDto } from '../dto';
import { UpdateVenueDto } from '../dto';

@Injectable()
export class VenuesService {
    
    create(payload: CreateVenueDto) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        throw new Error('Method not implemented.');
    }
    findOne(id: string) {
        throw new Error('Method not implemented.');
    }
    update(id: string, payload: UpdateVenueDto) {
        throw new Error('Method not implemented.');
    }
    delete(id: string) {
        throw new Error('Method not implemented.');
    }
}
