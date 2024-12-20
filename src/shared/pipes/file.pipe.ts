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
    return files
  }
}
