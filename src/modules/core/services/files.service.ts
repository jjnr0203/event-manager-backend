import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatalogueDto, CreateFileDto, UpdateCatalogueDto } from '../dto';
import { CoreRepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { FileEntity } from '../entities/file.entity';
import { CloudinaryService } from './cloudinary.service';

@Injectable()
export class FilesService {
  constructor(
    @Inject(CoreRepositoryEnum.FILE_REPOSITORY)
    private repository: Repository<FileEntity>,
    private cloudinaryService: CloudinaryService,
  ) {}

  private async handleSaveError(uploadedImages:unknown[]){
    await Promise.all(
      uploadedImages.map((image:FileEntity)=> this.cloudinaryService.deleteImage(image.publicId))
    )
  }

  async create(files: Express.Multer.File[], entityId: string):Promise<FileEntity[]> {
    const images = await Promise.all(
      files.map(async (image) => {
        return await this.cloudinaryService.uploadImage(image);
      }),
    );
    try {
      const newImages = await Promise.all(
        images.map(async (image: CreateFileDto) => {
          const newImage = this.repository.create({ ...image, entityId });
          await this.repository.save(newImage);
  
          return newImage;
        }),
      );
      return newImages;
    } catch (error) {
      console.error(error);
      this.handleSaveError(images)
    }
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
