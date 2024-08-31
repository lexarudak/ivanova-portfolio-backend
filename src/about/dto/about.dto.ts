import { IsNotEmpty } from 'class-validator';
import { SkillsData } from 'src/shared/types';

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
