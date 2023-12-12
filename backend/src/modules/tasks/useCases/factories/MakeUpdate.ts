import { PrismaTaskRepository } from "../../infra/repositories/TaskPrismaRepository";
import { UpdateTask } from "../UpdateTask";

export function MakeUpdateTask() {
  const employeeRepository = new PrismaTaskRepository();
  return new UpdateTask(employeeRepository);
}
