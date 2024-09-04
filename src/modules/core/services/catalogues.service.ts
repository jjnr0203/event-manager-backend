import { Controller, Inject, Injectable } from '@nestjs/common';
import { CreateCatalogueDto } from '../dto';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { CatalogueEntity } from '../entities/catalogue.entity';

@Injectable()
export class CataloguesService {
  constructor(
    @Inject(CoreRepositoryEnum.CATALOGUE_REPOSITORY)
    private repository: Repository<CatalogueEntity>,
  ) {}
  async create(payload: CreateCatalogueDto) {
    const catalogue = await this.repository.create(payload);
    await this.repository.save(catalogue);
    return catalogue;
  }
}
