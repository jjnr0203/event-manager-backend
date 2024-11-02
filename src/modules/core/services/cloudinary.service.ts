import { BadRequestException, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryImageConfig } from 'src/config/cloudinary-image-config';
import { envs } from 'src/config/envs';

@Injectable()
export class CloudinaryService {
  constructor() {
    // config cloudinary
    cloudinary.config({
      cloud_name: envs.cloudinary.name,
      api_key: envs.cloudinary.cloudinaryKey,
      api_secret: envs.cloudinary.cloudinarySecret,
    });
  }

  private validateFile(file: Express.Multer.File) {
    if (!CloudinaryImageConfig.allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('File type not allowed');
    }
    if (file.size > CloudinaryImageConfig.maxFileSize) {
      throw new BadRequestException('File size exceeded');
    }
  }

  async uploadImage(file: Express.Multer.File) {
    this.validateFile(file);
    
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {
          folder: 'events',
          transformation: [CloudinaryImageConfig.transformation[0]],
          resource_type: 'auto',
          unique_filename: true,
        },
        (error, result) => {
          if (error) return reject(error);

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            resourceType: result.resource_type,
            format: result.format,
            createdAt: result.created_at
          });
        },
      );
      
      upload.end(file.buffer);
    });
  }

  async deleteImage(publicId: string) {
    await cloudinary.uploader.destroy(publicId);
  }
}
