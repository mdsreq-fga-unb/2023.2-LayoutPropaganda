import { PrismaTaskRepository } from "../../infra/repositories/TaskPrismaRepository";
import { CreateTask } from "../CreateTask";

export function MakeCreateTask() {
  const employeeRepository = new PrismaTaskRepository();
  return new CreateTask(employeeRepository);
}
