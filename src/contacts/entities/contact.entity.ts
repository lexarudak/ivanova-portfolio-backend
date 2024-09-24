import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  value: string;
}
