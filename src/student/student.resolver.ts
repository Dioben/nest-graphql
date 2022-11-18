import { Injectable } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './dto/create-student.input';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Injectable()
@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private service: StudentService) {}

  @Mutation(() => StudentType)
  async createStudent(
    @Args('student') student: CreateStudentInput,
  ): Promise<Student> {
    return this.service.createStudent(student);
  }
  @Query(() => [StudentType])
  async students(): Promise<Student[]> {
    return this.service.getAllStudents();
  }
  @Query(() => StudentType)
  async student(@Args('id') id: string): Promise<Student> {
    return this.service.getStudentByID(id);
  }
}
