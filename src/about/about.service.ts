import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';
import { Education } from './entities/education.entity';
import { Experience } from './entities/experience.entity';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private readonly aboutRepository: Repository<About>,
    @InjectRepository(Education)
    private readonly educationRepository: Repository<Education>,
    @InjectRepository(Experience)
    private readonly experienceRepository: Repository<Experience>,
  ) {}

  async createInfo({ title, image, info }: CreateInfoDto) {
    const existAbout = await this.aboutRepository.findOne({
      where: {
        id: 'about',
      },
    });

    const newAbout = { ...existAbout, id: 'about', title, image, info };

    await this.aboutRepository.save(newAbout);

    return newAbout;
  }

  async get() {
    const [[about], experience, education] = await Promise.all([
      this.aboutRepository.find(),
      this.educationRepository.find(),
      this.experienceRepository.find(),
    ]);
    return { ...about, experience, education };
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
