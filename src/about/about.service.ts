import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';
import { Education } from './entities/education.entity';
import { Experience } from './entities/experience.entity';
import { MOCK_ABOUT, MOCK_OTHER } from 'src/mock/mock-about';
import { Skills } from './entities/skills.entity';
import { SKILLS_TYPE } from 'src/shared/constants';
import {
  CreateInfoDto,
  UpdateAboutDto,
  UpdateEducationDto,
  UpdateExperienceDto,
  UpdateLangDto,
  UpdateLocationDto,
  UpdateOrderDto,
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
    const [existAbout] = await this.aboutRepository.findBy({
      id: 'about',
    });

    console.log(existAbout.languages);

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

  async updateLang({ languages }: UpdateLangDto) {
    const currentAbout = await this.getExistAbout();
    const newAbout = { ...currentAbout, languages };
    await this.aboutRepository.save(newAbout);
    return { languages };
  }

  async updateLocation({ location }: UpdateLocationDto) {
    const currentAbout = await this.getExistAbout();
    const newAbout = { ...currentAbout, location };
    await this.aboutRepository.save(newAbout);
    return { location };
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
      this.experienceRepository.find(),
      this.educationRepository.find(),
      this.skillsRepository.find(),
    ]);

    return {
      ...about,
      ...this.orderSkills(allSkills),
      experience: experience.length ? experience : MOCK_OTHER.experience,
      education: education.length ? education : MOCK_OTHER.education,
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

  async updateExperience({ experience }: UpdateExperienceDto) {
    const currentAbout = await this.getExistAbout();
    const { experienceOrder } = currentAbout;
    const updatedExperience = this.experienceRepository.create({
      ...experience,
      isSaved: true,
    });

    if (!experienceOrder) {
      await this.aboutRepository.save({
        ...currentAbout,
        experienceOrder: experience.id,
      });
    } else if (!experienceOrder.includes(experience.id)) {
      await this.aboutRepository.save({
        ...currentAbout,
        experienceOrder: `${experience.id},${experienceOrder}`,
      });
    }
    return await this.experienceRepository.save(updatedExperience);
  }

  async updateExperienceOrder({ newOrder }: UpdateOrderDto) {
    const experienceOrder = newOrder.toString();
    const currentAbout = await this.getExistAbout();
    await this.aboutRepository.save({ ...currentAbout, experienceOrder });
    return { experienceOrder };
  }

  async deleteExperience(id: string) {
    const [result, currentAbout] = await Promise.all([
      this.experienceRepository.delete(id),
      this.getExistAbout(),
    ]);

    const experienceOrder = currentAbout.experienceOrder
      .split(',')
      .filter((orderId) => orderId !== id)
      .toString();

    await this.aboutRepository.save({ ...currentAbout, experienceOrder });

    if (result.affected === 0) {
      console.log(`Experience with ID "${id}" not found`);
    }
    return { id, experienceOrder };
  }

  async updateEducation({ education }: UpdateEducationDto) {
    const currentAbout = await this.getExistAbout();
    const { educationOrder } = currentAbout;
    const updatedEducation = this.educationRepository.create({
      ...education,
      isSaved: true,
    });

    if (!educationOrder) {
      await this.aboutRepository.save({
        ...currentAbout,
        educationOrder: education.id,
      });
    } else if (!educationOrder.includes(education.id)) {
      await this.aboutRepository.save({
        ...currentAbout,
        educationOrder: `${education.id},${educationOrder}`,
      });
    }
    return await this.educationRepository.save(updatedEducation);
  }

  async updateEducationOrder({ newOrder }: UpdateOrderDto) {
    const educationOrder = newOrder.toString();
    const currentAbout = await this.getExistAbout();
    await this.aboutRepository.save({ ...currentAbout, educationOrder });
    return { educationOrder };
  }

  async deleteEducation(id: string) {
    const [result, currentAbout] = await Promise.all([
      this.educationRepository.delete(id),
      this.getExistAbout(),
    ]);

    const educationOrder = currentAbout.educationOrder
      .split(',')
      .filter((orderId) => orderId !== id)
      .toString();

    await this.aboutRepository.save({ ...currentAbout, educationOrder });

    if (result.affected === 0) {
      console.log(`Experience with ID "${id}" not found`);
    }
    return { id, educationOrder };
  }
}
