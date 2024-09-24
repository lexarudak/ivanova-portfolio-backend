import { IsNotEmpty } from 'class-validator';
import { SkillsData } from 'src/shared/types';
import { Experience } from '../entities/experience.entity';
import { Education } from '../entities/education.entity';

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

export class UpdateLocationDto {
  location: string;
}

export class UpdateSkillsDto {
  skills: SkillsData;
}

export class UpdateExperienceDto {
  experience: Experience;
}

export class UpdateEducationDto {
  education: Education;
}

export class UpdateOrderDto {
  newOrder: string[];
}
