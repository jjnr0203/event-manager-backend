import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FilesValidationPipe implements PipeTransform {
  //first argument is an object containing the value of the argument and the metadata
  transform(files: Express.Multer.File[], metadata: ArgumentMetadata) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files have been found');
    }
    return files;
  }
}

/* 
Los pipes son clases que se pueden utilizar para transformar o validar los datos que entran o salen de una aplicación.
Los pipes se pueden aplicar a los argumentos de los métodos de controlador o a los valores de los campos de entrada y
salida de una solicitud o respuesta HTTP.
 */