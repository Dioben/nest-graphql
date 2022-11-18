import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(Student) private repo: MongoRepository<Student>,
  ) {}

  async getStudentById(id: string): Promise<Student> {
    return this.repo.findOneBy({ id });
  }
  async getAllStudents(): Promise<Student[]> {
    return this.repo.find();
  }

  async getManyStudentsByID(ids: string[]): Promise<Student[]> {
    return this.repo.findBy({
      where: {
        id: {
          $in: ids,
        },
      },
    });
  }

  async createStudent(studentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = studentInput;
    const student = this.repo.create({
      firstName,
      lastName,
      id: uuid(),
    });
    this.repo.save(student);
    return student;
  }
}
