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
  UpdateExperienceDto,
  UpdateExperienceOrderDto,
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

  @Get()
  get() {
    return this.aboutService.get();
  }

  @Patch('experience')
  updateExperience(@Body() updateExperienceDto: UpdateExperienceDto) {
    return this.aboutService.updateExperience(updateExperienceDto);
  }

  @Patch('experience/order')
  updateExperienceOder(
    @Body() updateExperienceOrderDto: UpdateExperienceOrderDto,
  ) {
    return this.aboutService.updateExperienceOrder(updateExperienceOrderDto);
  }

  @Delete('experience/:id')
  deleteExperience(@Param('id') id: string) {
    return this.aboutService.deleteExperience(id);
  }
}
