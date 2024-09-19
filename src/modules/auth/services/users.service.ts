import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AuthRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { UserEntity } from '../entities/user.entity';
import { InformationUserEntity } from '../entities/information_user.entity';
import { InformationUsersService } from './information-users.service';
import { CreateUserFromGoogleDto } from '../dto/user/create-google-user.dto';
import { RolesService } from './roles.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private repository: Repository<UserEntity>,
    private rolesService: RolesService,
  ) {}

  async create(payload: { [key: string]: any }) {
    const role = await this.rolesService.findByCode(1);
    const user = this.repository.create({
      ...payload,
      roles: [role],
    });
    await this.repository.save(user);
    return user;
  }

  async createLocalUser(payload: CreateUserDto) {
    return await this.create(payload);
  }

  async createUserFromGoogle(payload: CreateUserFromGoogleDto) {
    return await this.create(payload);
  }

  async findAll() {
    const users = await this.repository.find();
    return users;
  }

  async findOne(id: string) {
    const user = await this.repository.findOne({
      where: {id},
      select:['id','email'],
      relations:{roles:true, informationUser:true }
    });
    return user;
  }
  
  async findOneByEmail(email: string) {
    const user = await this.repository.findOne({
      where: { email},
      relations: {
        roles: true,
      },
    });
    return user;
  }

  async update(id: string, payload: UpdateUserDto) {
    const user = await this.repository.preload({
      id: id,
      ...payload,
    });
    if (!user) throw new NotFoundException('Information user not found');
    try {
      await this.repository.save(user);
      return user;
    } catch (error) {
      console.log(error);

      return 'Error updating the user';
    }
  }
  async delete(id: string) {
    const user = await this.repository.softDelete(id);
    return user;
  }
}
