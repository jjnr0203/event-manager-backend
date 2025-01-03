import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatalogueDto, UpdateCatalogueDto } from '../dto';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { CatalogueEntity } from '../entities/catalogue.entity';

@Injectable()
export class CataloguesService {
  constructor(
    @Inject(CoreRepositoryEnum.CATALOGUE_REPOSITORY)
    private readonly repository: Repository<CatalogueEntity>,
  ) {}
  async insertMany(createCatalogueDto: CreateCatalogueDto[]) {
    const catalogues = this.repository.save(createCatalogueDto);
    return catalogues;
  }

  async create(payload: CreateCatalogueDto) {
    const catalogue = this.repository.create(payload);
    await this.repository.save(catalogue);
    return catalogue;
  }

  async findAll() {
    const catalogues = await this.repository.find();

    return catalogues;
  }

  async findOne(id: string) {
    const event = await this.repository.findOne({
      where: { id: id },
    });
    return event;
  }

  async update(id: string, payload: UpdateCatalogueDto) {
    const event = await this.repository.preload({ id: id, ...payload });
    if (!event) throw new NotFoundException('Catalogue not found');
    try {
      await this.repository.save(event);
      return event;
    } catch (error) {
      console.log(error);

      return 'Error updating catalogue';
    }
  }

  async delete(id: string) {
    const catalogue = await this.repository.softDelete(id);
    return catalogue;
  }
}
