import { Field, InputType } from '@nestjs/graphql';
import { Matches, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @Field()
  @MinLength(2)
  @Matches('^[a-zA-Z]+$')
  firstName: string;
  @Field()
  @MinLength(2)
  @Matches('^[a-zA-Z]+$')
  lastName: string;
}
