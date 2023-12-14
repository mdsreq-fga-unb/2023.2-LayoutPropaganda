import { Prisma, PrismaClient, Task } from "@prisma/client";
import { ITaskRepository } from "../../repositories/ITaskRepository";

export class PrismaTaskRepository implements ITaskRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: Prisma.TaskUncheckedCreateInput): Promise<Task> {
    const task = await this.prisma.task.create({ data });
    return task;
  }

  async findById(id_task: string): Promise<Task | null> {
    console.log(id_task);
    return this.prisma.task.findUnique({
      where: {
        id_task,
        is_deleted: false,
      },
    });
  }

  async listAll(): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        is_deleted: false,
      },
    });
  }

  async deleteById(id_task: string): Promise<void> {
    await this.prisma.task.update({
      where: {
        id_task,
      },
      data: {
        is_deleted: true,
      },
    });
  }

  async listByEmployeeId(id_employee: string): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        id_employee,
        is_deleted: false,
      },
    });
  }

  async save(task: Task): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id_task: task.id_task,
      },
      data: task,
    });
  }

  async restoreById(id_task: string): Promise<void> {
    await this.prisma.task.update({
      where: {
        id_task,
      },
      data: {
        is_deleted: false,
      },
    });
  }
}
