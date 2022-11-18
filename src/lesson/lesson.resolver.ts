import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './dto/create-lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { AssignStudentsToLessonInput } from './dto/assign-students-to-lesson.input';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private service: LessonService) {}

  @Query(() => LessonType)
  async lesson(@Args('id') id: string): Promise<Lesson> {
    return this.service.getLesson(id);
  }

  @Query(() => [LessonType])
  async lessons(): Promise<Lesson[]> {
    return this.service.getAllLessons();
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') input: CreateLessonInput,
  ): Promise<Lesson> {
    return this.service.createLesson(input);
  }

  @Mutation(() => LessonType)
  async assignStudentsToLesson(
    @Args('assignStudentsToLessonInput') input: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    return this.service.assignStudentsToLesson(input);
  }
}
