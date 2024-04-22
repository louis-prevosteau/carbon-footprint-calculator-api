import { CreateFootprintInput } from './create-footprint.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFootprintInput extends PartialType(CreateFootprintInput) {
  @Field(() => Int)
  id: number;
}
