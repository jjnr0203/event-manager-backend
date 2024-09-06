import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { CollaboratorEntity } from '../entities/collaborator.entity';
import { CreateCollaboratorDto, UpdateCollaboratorDto } from '../dto';

@Injectable()
export class CollaboratorsService {
  constructor(
    @Inject(CoreRepositoryEnum.COLLABORATOR_REPOSITORY)
    private repository: Repository<CollaboratorEntity>,
  ) {}

  async create(payload: CreateCollaboratorDto) {
    const collaborator = await this.repository.create(payload);
    await this.repository.save(collaborator);

    return collaborator;
  }

  async findAll() {
    const collaborator = await this.repository.find();

    return collaborator;
  }

  async findOne(id: string) {
    const collaborator = await this.repository.findOne({
      where: { id },
    });

    return collaborator;
  }

  async update(id: string, payload: UpdateCollaboratorDto) {
    const collaborator = await this.repository.preload({ id, ...payload });

    if (!collaborator) throw new NotFoundException('Collaborator not found');
    try {
      await this.repository.save(collaborator);
      return collaborator;
    } catch (error) {
      console.error(error);
      return 'Error updating the collaborator';
    }
  }

  async delete(id:string) {
    const collaborator = await this.repository.softDelete(id);

    return collaborator;
  }
}
