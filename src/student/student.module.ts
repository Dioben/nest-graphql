import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  providers: [StudentService, StudentRepository, StudentResolver],
  imports: [TypeOrmModule.forFeature([Student])],
  exports: [StudentService],
})
export class StudentModule {}
