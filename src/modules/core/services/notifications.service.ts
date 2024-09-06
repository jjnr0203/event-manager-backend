import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { NotificationEntity } from '../entities/notification.entity';
import { Repository } from 'typeorm';
import { CreateNotificationDto, UpdateNotificationDto } from '../dto';

@Injectable()
export class NotificationsService {
  constructor(
    @Inject(CoreRepositoryEnum.NOTIFICATION_REPOSITORY)
    private repository: Repository<NotificationEntity>
  ) {}

  async create(payload:CreateNotificationDto){
    const notification = await this.repository.create(payload);

    return notification;
  }

  async findAll(){
    const notification = await this.repository.find()

    return notification;
  }

  async findOne(id:string){
    const notification = await this.repository.findOne({
        where:{id}
    })
    
    return notification;
  }

  async update(id: string, payload: UpdateNotificationDto){
    const notification = await this.repository.preload({id, ...payload});
    
    if(!notification) throw new NotFoundException ('Not found');
    try{
        await this.repository.save(notification)

        return notification;
    }catch (error){
        console.error(error)

        return 'Notifcation error update'
    }
  }
}
