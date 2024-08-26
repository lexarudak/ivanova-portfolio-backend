import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { MOCK_PROJECTS } from 'src/mock/mock-projects';

@Injectable()
export class ProjectsService {
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  findAll() {
    return MOCK_PROJECTS.map(
      ({ id, title, info: { year }, image, filters }) => ({
        id,
        title,
        year,
        image,
        filters,
      }),
    );
  }

  findOne(id: string) {
    return MOCK_PROJECTS.find((project) => project.id === id);
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
