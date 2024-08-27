import { BLOCK_TYPE } from 'src/shared/constants';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Block {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('json', { nullable: true })
  text: string[];

  @Column('json', { nullable: true })
  images: string[];

  @Column()
  blockType: BLOCK_TYPE;

  @ManyToOne(() => Project, ({ id }) => id)
  @JoinColumn({ name: 'project_id' })
  project: Project;
}
