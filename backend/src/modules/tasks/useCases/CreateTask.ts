import { Task } from "@prisma/client";
import { ITaskRepository } from "../repositories/ITaskRepository";

interface IRequest {
  id_employee: string;
  title: string;
  description: string;
  deadline: Date;
  status: "TODO" | "DOING" | "DONE";
}

export class CreateTask {
  constructor(private taskRepository: ITaskRepository) {}

  public async execute(data: IRequest): Promise<Task> {
    const employee = await this.taskRepository.create(data);

    return employee;
  }
}
