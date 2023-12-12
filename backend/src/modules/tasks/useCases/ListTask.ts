import { Task } from "@prisma/client";
import { ITaskRepository } from "../repositories/ITaskRepository";

interface IRequest {
  id_employee: string;
}

export class ListTask {
  constructor(private employeeRepository: ITaskRepository) {}

  public async execute(data: IRequest): Promise<Task[]> {
    const tasks = await this.employeeRepository.listByEmployeeId(
      data.id_employee,
    );

    return tasks;
  }
}
