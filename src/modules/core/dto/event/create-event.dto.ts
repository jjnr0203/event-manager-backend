import { PartialType } from "@nestjs/mapped-types";
import { CreateEventDto } from "./update-event.dto";


export class UpdateEventDto extends PartialType(CreateEventDto){}