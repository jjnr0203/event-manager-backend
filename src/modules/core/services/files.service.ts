import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileDto } from '../dto';
import { UpdateFileDto } from '../dto';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { FileEntity } from '../entities/file.entity';

@Injectable()
export class FilesService {
  constructor(
    @Inject(CoreRepositoryEnum.FILE_REPOSITORY)
    private repository: Repository<FileEntity>,
  ) {}

  async create(payload: CreateFileDto) {
    const file = await this.repository.create(payload);
    await this.repository.save(file);
    return file;
  }

  async findAll() {
    const files = await this.repository.find();

    return files;
  }

  async findOne(id: string) {
    const file = await this.repository.findOne({
      where: { id: id },
    });
    return file;
  }

  async update(id: string, payload: UpdateFileDto) {
    const file = await this.repository.preload({ id: id, ...payload });
    if (!file) throw new NotFoundException('File not found');
    try {
      await this.repository.save(file);
      return file;
    } catch (error) {
      console.log(error);

      return 'Error updating the event';
    }
  }
  async delete(id: string) {
    const file = await this.repository.softDelete(id);
    return file;
  }
}
