import { Filter } from './filters.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Block } from './block.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @OneToMany(() => Filter, ({ name }) => name)
  filters: Filter[];

  @Column({ type: 'json' })
  info: {
    year: string;
    location: string;
    participation: string[];
  };

  @OneToMany(() => Block, ({ id }) => id)
  blocks: Block[];
}
