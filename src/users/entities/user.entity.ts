import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Footprint } from 'src/footprints/entities/footprint.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Field((type) => [Footprint])
  @OneToMany((type) => Footprint, (footprint) => footprint.user)
  footprints: Footprint[];

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
