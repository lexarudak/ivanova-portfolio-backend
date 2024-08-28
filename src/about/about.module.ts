import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Experience } from './entities/experience.entity';
import { Education } from './entities/education.entity';

@Module({
  imports: [TypeOrmModule.forFeature([About, Experience, Education])],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
