import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { About } from './about.entity';

@Entity()
export class Experience {
  @PrimaryColumn()
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

  @Column({ default: true })
  isSaved: boolean;

  @Column('json')
  achievements: string[];

  @ManyToOne(() => About, ({ id }) => id)
  @JoinColumn({ name: 'about_id' })
  about: About;
}
