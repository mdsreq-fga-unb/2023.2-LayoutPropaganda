import { PrismaTaskRepository } from "../../infra/repositories/TaskPrismaRepository";
import { DeleteTask } from "../DeleteTask";

export function MakeDeleteTask() {
  const employeeRepository = new PrismaTaskRepository();
  return new DeleteTask(employeeRepository);
}
