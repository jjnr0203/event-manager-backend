import { PartialType } from "@nestjs/mapped-types";
import { CreateFeedbackDto } from "./create-feedback.dto copy";

export class UpdateFeedbackDto extends PartialType(CreateFeedbackDto) {}