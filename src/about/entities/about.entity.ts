import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Experience } from './experience.entity';
import { Education } from './education.entity';
import { Skills } from './skills.entity';
import { TitleValue } from 'src/shared/types';

@Entity()
export class About {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  location: string;

  @Column('json')
  languages: TitleValue[];

  @Column()
  about: string;

  @Column({ nullable: true })
  experienceOrder: string;

  @Column({ nullable: true })
  educationOrder: string;

  @OneToMany(() => Skills, ({ id }) => id)
  skills: Skills[];

  @OneToMany(() => Experience, ({ id }) => id)
  experience: Experience[];

  @OneToMany(() => Education, ({ id }) => id)
  education: Education[];
}
