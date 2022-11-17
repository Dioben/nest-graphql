import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonRepository } from './lesson.repository';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  providers: [LessonResolver, LessonService, LessonRepository],
  imports: [TypeOrmModule.forFeature([Lesson])],
})
export class LessonModule {}
