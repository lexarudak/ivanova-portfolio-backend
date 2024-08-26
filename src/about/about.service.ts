import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { MOCK_ABOUT } from 'src/mock/mock-about';

@Injectable()
export class AboutService {
  create(createAboutDto: CreateAboutDto) {
    return 'This action adds a new about';
  }

  get() {
    return MOCK_ABOUT;
  }

  findOne(id: number) {
    return `This action returns a #${id} about`;
  }

  update(id: number, updateAboutDto: UpdateAboutDto) {
    return `This action updates a #${id} about`;
  }

  remove(id: number) {
    return `This action removes a #${id} about`;
  }
}
