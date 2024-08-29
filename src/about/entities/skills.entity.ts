import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { About } from './about.entity';
import { SKILLS_TYPE } from 'src/shared/constants';

@Entity()
export class Skills {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: SKILLS_TYPE;

  @Column()
  value: string;

  @ManyToOne(() => About, ({ id }) => id)
  @JoinColumn({ name: 'about_id' })
  about: About;
}
