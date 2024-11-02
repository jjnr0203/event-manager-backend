import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CloudinaryImageConfig } from 'src/config/cloudinary-image-config';

@Injectable()
export class FilesValidationPipe implements PipeTransform {
  transform(files: Express.Multer.File[], metadata: ArgumentMetadata) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files have been found');
    }

    files.forEach((file) => {
      if (!CloudinaryImageConfig.allowedMimeTypes.includes(file.mimetype)) {
        throw new BadRequestException('Files type not allowed');
      }

      if (file.size > CloudinaryImageConfig.maxFileSize) {
        throw new BadRequestException('File size too large');
      }
    });

    return files
  }
}
