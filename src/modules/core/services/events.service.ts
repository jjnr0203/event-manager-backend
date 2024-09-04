import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto, UpdateEventDto } from '../dto';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { EventEntity } from '../entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @Inject(CoreRepositoryEnum.EVENT_REPOSITORY)
    private repository: Repository<EventEntity>,
  ) {}

  async findAll() {
    const events = await this.repository.find();
    return events;
  }

  async findOne(id: string) {
    const event = await this.repository.findOne({
      where: { id },
    });
    return event;
  }

  async create(payload: CreateEventDto) {
    const event = await this.repository.create(payload);
    await this.repository.save(event);
    return event;
  }

  async update(id: string, payload: UpdateEventDto) {
    const event = await this.repository.preload({ id, ...payload });
    if (!event) throw new NotFoundException('Event not found');
    await this.repository.save(event);
    return event;
  }

  async delete(id: string) {
    const event = await this.repository.softDelete(id);
    return event;
  }
}
