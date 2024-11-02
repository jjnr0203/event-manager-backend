import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CreateEventDto, UpdateEventDto } from '../dto';
import { EventsService } from '../services/events.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryImageConfig } from 'src/config/cloudinary-image-config';
import { FilesValidationPipe } from 'src/shared/pipes/file.pipe';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll() {
    const events = await this.eventsService.findAll();
    return events;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const event = this.eventsService.findOne(id);
    return event;
  }

  //todo: save imageUrl and return event
  @Post('')
  @UseInterceptors(
    FilesInterceptor('images', 3, {
      limits: {
        fileSize: CloudinaryImageConfig.maxFileSize,
      },
      fileFilter: (req, file, callback) => {
        if (!CloudinaryImageConfig.allowedMimeTypes.includes(file.mimetype)) {
          return callback(
            new BadRequestException('File type not allowed'),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  async create(
    @UploadedFiles(FilesValidationPipe)
    files: Express.Multer.File[],
    @Body() createEventDto: any,
  ) {
    const event = await this.eventsService.createEvent(files, createEventDto);
    return event;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return await this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.eventsService.delete(id);
  }
}
