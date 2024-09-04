import { Controller, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatalogueDto, UpdateCatalogueDto } from '../dto';
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
  
  async findAll(){
    console.log('ejecutado service find all');
    
    const catalogues = await this.repository.find()
    console.log(catalogues, 'service');
    
    return catalogues
  }

  async findOne(id:string){
    const event = await this.repository.findOne({
      where:{id:id}
    })
    return event
  }

  async update(id: string, payload: UpdateCatalogueDto) {
    const event = await this.repository.preload({ id:id, ...payload });
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
