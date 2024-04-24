import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Footprint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  transport: number;

  @Column()
  @Field()
  food: number;

  @Column()
  @Field()
  house: number;

  @Column()
  @Field()
  divers: number;

  @Column()
  @Field()
  publicServices: number;

  @Column()
  @Field()
  total: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.footprints)
  user: User;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
