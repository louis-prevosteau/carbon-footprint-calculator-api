import { InputType, Field } from '@nestjs/graphql';

@InputType('createUser')
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
