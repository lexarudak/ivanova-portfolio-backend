import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FILTERS } from '../../shared/constants';
import { Project } from './project.entity';

@Entity()
export class Filter {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: FILTERS;

  @ManyToOne(() => Project, ({ id }) => id)
  @JoinColumn({ name: 'project_id' })
  project: Project;
}
