import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './dto/create-lesson.input';
import { LessonRepository } from './lesson.repository';
import { AssignStudentsToLessonInput } from './dto/assign-students-to-lesson.input';

@Injectable()
export class LessonService {
  constructor(private repository: LessonRepository) {}

  async createLesson(input: CreateLessonInput): Promise<Lesson> {
    return this.repository.createLesson(input);
  }

  async getLesson(id: string): Promise<Lesson> {
    return this.repository.findLessonByID(id);
  }
  async getAllLessons(): Promise<Lesson[]> {
    return this.repository.findAllLessons();
  }

  async assignStudentsToLesson(
    input: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    return this.repository.assignStudentsToLesson(input);
  }
}
