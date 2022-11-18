import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private repository: StudentRepository) {}
  createStudent(student: CreateStudentInput): Promise<Student> {
    return this.repository.createStudent(student);
  }
  async getAllStudents(): Promise<Student[]> {
    return this.repository.getAllStudents();
  }
  async getStudentByID(id: string): Promise<Student> {
    return this.repository.getStudentById(id);
  }
}
