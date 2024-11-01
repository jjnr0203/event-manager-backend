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

    if (!event) throw new NotFoundException('Event not found');
    return event;
  }

  async create(payload: CreateEventDto) {
    try {
      const event = this.repository.create(payload);
      await this.repository.save(event);
      return event;
    } catch (error) {
      console.log(error);

      return 'Error creating the event';
    }
  }

  async update(id: string, payload: UpdateEventDto) {
    const event = await this.repository.preload({ id, ...payload });
    if (!event) throw new NotFoundException('Event not found');
    try {
      await this.repository.save(event);
      return event;
    } catch (error) {
      console.log(error);

      return 'Error updating the event';
    }
  }

  async delete(id: string) {
    const event = await this.repository.softDelete(id);
    return event;
  }
}
