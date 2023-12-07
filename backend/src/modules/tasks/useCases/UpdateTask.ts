import { Task } from "@prisma/client";
import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { ITaskRepository } from "../repositories/ITaskRepository";

interface IRequest {
  id_task: string;
  title?: string;
  description?: string;
  deadline?: Date;
  status?: "TODO" | "DOING" | "DONE";
}

export class UpdateTask {
  constructor(private taskRepository: ITaskRepository) {}

  public async execute(data: IRequest): Promise<Task> {
    const task = await this.taskRepository.findById(data.id_task);
    if (!task) {
      throw new NotFoundError("Task does not exists");
    }

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        task[key] = value;
      }
    });

    const updatedTask = await this.taskRepository.save(task);
    return updatedTask;
  }
}
