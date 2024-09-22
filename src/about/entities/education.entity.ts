import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { About } from './about.entity';

@Entity()
export class Education {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  location: string;

  @Column()
  position: string;

  @Column({ default: true })
  isSaved: boolean;

  @Column()
  period: string;

  @ManyToOne(() => About, ({ id }) => id)
  @JoinColumn({ name: 'about_id' })
  about: About;
}
