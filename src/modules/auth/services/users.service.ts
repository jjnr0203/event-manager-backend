import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AuthRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { UserEntity } from '../entities/user.entity';
import { InformationUserEntity } from '../entities/information_user.entity';
import { InformationUsersService } from './information-users.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private repository: Repository<UserEntity>,
    private readonly informationUsersService: InformationUsersService,
  ) {}

  async create(payload: CreateUserDto) {
    const { informationUser, ...newUser } = payload;

    const user = await this.repository.create(newUser);
    await this.repository.save(user);
    await this.informationUsersService.create({
      ...informationUser,
      user,
    });
    return user;
  }

  async findAll() {
    const users = await this.repository.find();
    return users;
  }

  async findOne(id: string) {
    const user = await this.repository.findOne({
      where: { id: id },
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
