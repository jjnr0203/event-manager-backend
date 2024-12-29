import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { In, Repository } from 'typeorm';
import { TicketTypeEntity } from '../entities/ticket-type.entity';
import { CreateTicketTypeDto } from '../dto/ticket_type/create-ticket-type.dto';
import { UpdateTicketTypeDto } from '../dto/ticket_type/update-ticket-type.dto';
import { ValidateTicketTypeDto } from '../dto/ticket_type/validate-ticket-type.dto';

@Injectable()
export class TicketTypesService {
  constructor(
    @Inject(CoreRepositoryEnum.TICKET_TYPE_REPOSITORY)
    private repository: Repository<TicketTypeEntity>,
  ) {}

  async create(payload: CreateTicketTypeDto) {
    const ticketType = await this.repository.create(payload);
    await this.repository.save(ticketType);
    return ticketType;
  }

  async validateTicketTypes(validateTicketTypeDto: ValidateTicketTypeDto[]) {
    const ticketTypes = await this.repository.find({
      where: {
        id: In(
          validateTicketTypeDto.map((ticketType) => ticketType.ticketTypeId),
        ),
      },
      relations: {
        event: true,
      },
    });

    if (!ticketTypes) {
      throw new NotFoundException('Ticket types not found');
    }
    ticketTypes.forEach((ticketType) => {
      const currentTicketType = validateTicketTypeDto.find(
        (t) => t.ticketTypeId === ticketType.id,
      );
      if (ticketType.disponibility < currentTicketType.quantity) {
        throw new BadRequestException(
          `There are not enough ${ticketType.name} tickets available`,
        );
      }
    });
    return ticketTypes;
  }

  async findAll() {
    const ticketType = await this.repository.find();
    return ticketType;
  }

  async findOne(id: string) {
    const ticketType = await this.repository.findOne({
      where: { id },
      relations: { event: true },
    });
    return ticketType;
  }

  async update(id: string, payload: UpdateTicketTypeDto) {
    const ticketType = await this.repository.preload({ id, ...payload });

    if (!ticketType) throw new NotFoundException('Not found');
    try {
      this.repository.save(ticketType);

      return ticketType;
    } catch (error) {
      console.error(error);

      return ticketType;
    }
  }

  async delete(id: string) {
    const ticketType = await this.repository.softDelete(id);
    return ticketType;
  }
}
