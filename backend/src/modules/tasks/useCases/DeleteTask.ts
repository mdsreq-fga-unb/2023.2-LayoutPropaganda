import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { ITaskRepository } from "../repositories/ITaskRepository";

export class DeleteTask {
  constructor(private taskRepository: ITaskRepository) {}

  public async execute(id_task: string): Promise<void> {
    const task = await this.taskRepository.findById(id_task);
    if (task) {
      throw new NotFoundError("Task does not exists");
    }

    await this.taskRepository.deleteById(id_task);
  }
}
