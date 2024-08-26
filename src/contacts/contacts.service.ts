import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { MOCK_CONTACTS } from 'src/mock/mock-contacts';

@Injectable()
export class ContactsService {
  create(createContactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  get() {
    return MOCK_CONTACTS;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
