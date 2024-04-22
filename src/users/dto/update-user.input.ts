import { CreateUserInput } from './create-user.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType('updateUser')
export class UpdateUserInput extends PartialType(CreateUserInput) {}
