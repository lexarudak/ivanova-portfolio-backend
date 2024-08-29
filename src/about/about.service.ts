import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';
import { Education } from './entities/education.entity';
import { Experience } from './entities/experience.entity';
import { MOCK_ABOUT } from 'src/mock/mock-about';
import { Skills } from './entities/skills.entity';
import { SKILLS_TYPE } from 'src/shared/constants';

@Injectable()
export class AboutService {
  initialAbout: typeof MOCK_ABOUT;
  constructor(
    @InjectRepository(About)
    private readonly aboutRepository: Repository<About>,
    @InjectRepository(Skills)
    private readonly skillsRepository: Repository<Skills>,
    @InjectRepository(Education)
    private readonly educationRepository: Repository<Education>,
    @InjectRepository(Experience)
    private readonly experienceRepository: Repository<Experience>,
  ) {
    this.initialAbout = {
      ...MOCK_ABOUT,
    };
  }

  async getExistAbout() {
    console.log('ss');
    const existAbout = await this.aboutRepository.findOne({
      where: {
        id: 'about',
      },
    });

    return { ...this.initialAbout, ...existAbout };
  }

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

  async updateAbout({ about }: UpdateAboutDto) {
    const currentAbout = await this.getExistAbout();
    const newAbout = { ...currentAbout, about };
    await this.aboutRepository.save(newAbout);
    return { about };
  }

  async get() {
    const [about, experience, education, advanced, intermediate, novice] =
      await Promise.all([
        this.getExistAbout(),
        this.educationRepository.find(),
        this.experienceRepository.find(),
        this.skillsRepository.find({
          where: {
            type: SKILLS_TYPE.advanced,
          },
        }),
        this.skillsRepository.find({
          where: {
            type: SKILLS_TYPE.intermediate,
          },
        }),
        this.skillsRepository.find({
          where: {
            type: SKILLS_TYPE.novice,
          },
        }),
      ]);

    return {
      ...about,
      skills: { advanced, intermediate, novice },
      experience,
      education,
    };
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
