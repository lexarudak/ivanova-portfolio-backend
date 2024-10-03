import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { AboutService } from './about.service';
import {
  UpdateAboutDto,
  UpdateEducationDto,
  UpdateExperienceDto,
  UpdateLangDto,
  UpdateLocationDto,
  UpdateOrderDto,
  UpdateSkillsDto,
} from './dto/about.dto';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  updateAbout(@Body() createAboutDto: UpdateAboutDto) {
    return this.aboutService.updateAbout(createAboutDto);
  }

  @Post('skills')
  updateSkills(@Body() skillsDto: UpdateSkillsDto) {
    return this.aboutService.updateSkills(skillsDto);
  }

  @Post('location')
  updateLocation(@Body() locationDto: UpdateLocationDto) {
    return this.aboutService.updateLocation(locationDto);
  }

  @Post('lang')
  updateLang(@Body() langDto: UpdateLangDto) {
    return this.aboutService.updateLang(langDto);
  }

  @Get()
  get() {
    return this.aboutService.get();
  }

  @Patch('experience')
  updateExperience(@Body() updateExperienceDto: UpdateExperienceDto) {
    return this.aboutService.updateExperience(updateExperienceDto);
  }

  @Patch('experience/order')
  updateExperienceOder(@Body() updateExperienceOrderDto: UpdateOrderDto) {
    return this.aboutService.updateExperienceOrder(updateExperienceOrderDto);
  }

  @Delete('experience/:id')
  deleteExperience(@Param('id') id: string) {
    return this.aboutService.deleteExperience(id);
  }

  @Patch('education')
  updateEducation(@Body() updateEducationDto: UpdateEducationDto) {
    return this.aboutService.updateEducation(updateEducationDto);
  }

  @Patch('education/order')
  updateEducationOder(@Body() updateEducationOderDto: UpdateOrderDto) {
    return this.aboutService.updateEducationOrder(updateEducationOderDto);
  }

  @Delete('education/:id')
  deleteEducation(@Param('id') id: string) {
    return this.aboutService.deleteEducation(id);
  }
}
