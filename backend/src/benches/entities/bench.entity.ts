import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bench {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('json')
  location: object;
}
