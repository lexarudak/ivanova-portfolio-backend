import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactsRepository: Repository<Contact>,
  ) {}

  async create({ contacts }: CreateContactDto) {
    await this.contactsRepository.clear();

    const promises = contacts.map((contact) =>
      this.contactsRepository.save(contact),
    );
    return await Promise.all(promises);
  }

  async get() {
    const contacts = (await this.contactsRepository.find()) || [];
    return { contacts };
  }
}
