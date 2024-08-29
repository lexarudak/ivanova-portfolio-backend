import { IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  contacts: {
    id: string;
    title: string;
    value: string;
  }[];
}
