import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AboutModule } from './about/about.module';

@Module({
  imports: [ProjectsModule, AboutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
