import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFootprintInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
