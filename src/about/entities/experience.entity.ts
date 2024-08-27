import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { About } from './about.entity';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  location: string;

  @Column()
  position: string;

  @Column()
  time: string;

  @Column()
  workType: string;

  @Column()
  period: string;

  @Column('json')
  achievements: string[];

  @ManyToOne(() => About, ({ id }) => id)
  @JoinColumn({ name: 'about_id' })
  about: About;
}
