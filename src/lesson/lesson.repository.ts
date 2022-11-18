import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './dto/create-lesson.input';
import { AssignStudentsToLessonInput } from './dto/assign-students-to-lesson.input';

Injectable();
export class LessonRepository {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}
  async createLesson(input: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = input;
    const lesson = this.lessonRepository.create({
      name,
      endDate,
      startDate,
      id: uuid(),
      students: students,
    });
    return this.lessonRepository.save(lesson);
  }
  async assignStudentsToLesson(
    input: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    const { lessonId, studentIds } = input;
    const lesson = await this.findLessonByID(lessonId);
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRepository.save(lesson);
  }

  async findLessonByID(id: string): Promise<Lesson> {
    return this.lessonRepository.findOneBy({ id });
  }
  async findAllLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }
}
