import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Experience } from './entities/experience.entity';
import { Education } from './entities/education.entity';
import { Skills } from './entities/skills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([About, Experience, Education, Skills])],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
