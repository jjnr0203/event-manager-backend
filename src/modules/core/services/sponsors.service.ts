import { Controller, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSponsorDto } from '../dto';
import { UpdateSponsorDto } from '../dto';
import { InformationUserEntity } from 'src/modules/auth/entities/information_user.entity';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { SponsorEntity } from '../entities/sponsor.entity';

@Injectable()
export class SponsorsService {
    constructor(
        @Inject(CoreRepositoryEnum.SPONSOR_REPOSITORY)
        private repository: Repository<SponsorEntity>
    ) {}

    async create(payload: CreateSponsorDto) {
        const sponsor = await this.repository.create(payload);
        await this.repository.save(sponsor);
        return sponsor;
    }

    async findAll() {
        console.log('ejecutado service find all');
        const sponsors = await this.repository.find()
        console.log(sponsors, 'service');
        return sponsors
    }

    async findOne(id: string) {
        const sponsor = await this.repository.findOne({
            where:{id:id}
          })
          return sponsor
    }
    async update(id: string, payload: UpdateSponsorDto) {
        const sponsor = await this.repository.preload({ id:id, ...payload });
        if (!sponsor) throw new NotFoundException('Sponsor not found');
        try {
        await this.repository.save(sponsor);
        return sponsor;
        } catch (error) {
        console.log(error);

      return 'Error updating the sponsor';
    }
    }
    async delete(id: string) {
        const sponsor = await this.repository.softDelete(id);
        return sponsor;
    }
}
