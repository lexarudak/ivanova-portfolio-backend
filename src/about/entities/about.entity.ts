import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Experience } from './experience.entity';
import { Education } from './education.entity';

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  value: string;

  @Column()
  location: string;

  @Column('json')
  languages: string[];

  @Column()
  about: string;

  @Column('json')
  skills: {
    title: string;
    list: string;
  }[];

  @OneToMany(() => Experience, ({ id }) => id)
  experience: Experience[];

  @OneToMany(() => Education, ({ id }) => id)
  education: Education[];
}
