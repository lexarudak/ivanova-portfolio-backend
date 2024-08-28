import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutDto } from './create-info.dto';

export class UpdateAboutDto extends PartialType(CreateAboutDto) {}
