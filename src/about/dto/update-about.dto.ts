import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoDto } from './create-info.dto';

export class UpdateAboutDto extends PartialType(CreateInfoDto) {}
