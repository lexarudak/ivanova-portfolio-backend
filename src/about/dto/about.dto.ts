import { IsNotEmpty } from 'class-validator';
import { SkillsData } from 'src/shared/types';
import { Experience } from '../entities/experience.entity';

export class CreateInfoDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  info: {
    location: string;
    languages: string[];
  };
}

export class UpdateAboutDto {
  about: string;
}

export class UpdateSkillsDto {
  skills: SkillsData;
}

export class UpdateExperienceDto {
  experience: Experience;
}

export class UpdateExperienceOrderDto {
  newOrder: string[];
}
