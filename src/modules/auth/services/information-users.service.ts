import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateInformationUserDto } from '../dto';
import { UpdateInformationUserDto } from '../dto';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { InformationUserEntity } from '../entities/information_user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class InformationUsersService {
    constructor(
        @Inject(CoreRepositoryEnum.INFORMATION_USER_REPOSITORY)
        private repository: Repository<InformationUserEntity>
    ) {}

   async create(payload: CreateInformationUserDto) {
    const informationUser = await this.repository.create(payload);
    await this.repository.save(informationUser);
    return informationUser;
  }

   async findAll() {
    console.log('ejecutado service find all');
    const informationUsers = await this.repository.find()
    console.log(informationUsers, 'service');
    return informationUsers
  }

   async findOne(id: string) {
    const informationUser = await this.repository.findOne({
      where:{id:id}
    })
    return informationUser
  }
  async update(id: string, payload: UpdateInformationUserDto) {
    const informationUser = await this.repository.preload({ id:id, ...payload });
    if (!informationUser) throw new NotFoundException('Information user not found');
    try {
      await this.repository.save(informationUser);
      return informationUser;
    } catch (error) {
      console.log(error);

      return 'Error updating the user';
    }
  }
   async delete(id: string) {
    const informationUser = await this.repository.softDelete(id);
    return informationUser;
  }
}
