import { IsNotEmpty } from 'class-validator';

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
