import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private service: LessonService) {}
  @Query(() => LessonType)
  lesson() {
    return {
      id: 'asdfg',
      name: 'class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
  @Mutation(() => LessonType)
  async createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ): Promise<Lesson> {
    return this.service.createLesson(name, startDate, endDate);
  }
}
