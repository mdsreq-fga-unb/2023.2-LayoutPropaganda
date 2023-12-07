import { PrismaTaskRepository } from "../../infra/repositories/TaskPrismaRepository";
import { ListTask } from "../ListTask";

export function MakeListTask() {
  const employeeRepository = new PrismaTaskRepository();
  return new ListTask(employeeRepository);
}
