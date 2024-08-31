import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';
import { Education } from './entities/education.entity';
import { Experience } from './entities/experience.entity';
import { MOCK_ABOUT } from 'src/mock/mock-about';
import { Skills } from './entities/skills.entity';
import { SKILLS_TYPE } from 'src/shared/constants';
import {
  CreateInfoDto,
  UpdateAboutDto,
  UpdateSkillsDto,
} from './dto/about.dto';

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
    const existAbout = await this.aboutRepository.findBy({
      id: 'about',
    });

    return { ...this.initialAbout, ...existAbout };
  }

  async createInfo({ title, image, info }: CreateInfoDto) {
    const existAbout = await this.aboutRepository.findBy({
      id: 'about',
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

  orderSkills(allSkills: Skills[]) {
    const skills = allSkills.reduce(
      (acc, { type, value }) => {
        acc[type].push(value);
        return acc;
      },
      { advanced: [], intermediate: [], novice: [] },
    );
    return { skills };
  }

  async get() {
    const [about, experience, education, allSkills] = await Promise.all([
      this.getExistAbout(),
      this.educationRepository.find(),
      this.experienceRepository.find(),
      this.skillsRepository.find(),
    ]);

    return {
      ...about,
      ...this.orderSkills(allSkills),
      experience,
      education,
    };
  }

  async updateSkills({
    skills: { advanced, intermediate, novice },
  }: UpdateSkillsDto) {
    await this.skillsRepository.clear();

    const advancedData = advanced.map((value) =>
      this.skillsRepository.create({ type: SKILLS_TYPE.advanced, value }),
    );
    const intermediateData = intermediate.map((value) =>
      this.skillsRepository.create({ type: SKILLS_TYPE.intermediate, value }),
    );
    const noviceData = novice.map((value) =>
      this.skillsRepository.create({ type: SKILLS_TYPE.novice, value }),
    );

    const allSkills = await this.skillsRepository.save([
      ...advancedData,
      ...intermediateData,
      ...noviceData,
    ]);

    return this.orderSkills(allSkills);
  }
}
