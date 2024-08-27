import { IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  contacts: {
    title: string;
    value: string;
  }[];
}
