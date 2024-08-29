import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    console.log(createContactDto);
    return this.contactsService.create(createContactDto);
  }

  @Get()
  get() {
    return this.contactsService.get();
  }
}
