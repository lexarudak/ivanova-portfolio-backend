import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { About } from './about.entity';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  location: string;

  @Column()
  position: string;

  @Column()
  period: string;

  @ManyToOne(() => About, ({ id }) => id)
  @JoinColumn({ name: 'about_id' })
  about: About;
}
