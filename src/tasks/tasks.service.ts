import { Get, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    try {
      return this.prisma.task.findMany();
    } catch (e) {
      console.log('Cannot get tasks');
      throw new Error(e);
    }
  }

  create(createTaskDto: CreateTaskDto) {
    try {
      return this.prisma.task.create({ data: createTaskDto });
    } catch (e) {
      console.log('Cannot create task');
      throw new Error(e);
    }
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      return this.prisma.task.update({
        where: { id },
        data: updateTaskDto,
      });
    } catch (e) {
      console.log('Cannot update task');
      throw new Error(e);
    }
  }

  remove(id: number) {
    try {
      return this.prisma.task.delete({ where: { id } });
    } catch (e) {
      console.log('Cannot remove task');
      throw new Error(e);
    }
  }
}
