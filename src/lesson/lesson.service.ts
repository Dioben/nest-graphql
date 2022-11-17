import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
  constructor(private repository: LessonRepository) {}

  async createLesson(
    name: string,
    startDate: string,
    endDate: string,
  ): Promise<Lesson> {
    return this.repository.createLesson(name, startDate, endDate);
  }
}
