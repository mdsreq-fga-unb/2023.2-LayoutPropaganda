import { Prisma, Task } from "@prisma/client";

export interface ITaskRepository {
  create(data: Prisma.TaskUncheckedCreateInput): Promise<Task>;
  findById(id: string): Promise<Task | null>;
  deleteById(id: string): Promise<void>;
  listAll(): Promise<Task[]>;
  listByEmployeeId(employee_id: string): Promise<Task[]>;
  save(task: Task): Promise<Task>;
  restoreById(id: string): Promise<void>;
}
