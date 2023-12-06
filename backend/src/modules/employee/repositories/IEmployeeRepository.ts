import { Employee, Prisma } from "@prisma/client";

export interface IEmployeeRepository {
  create(data: Prisma.EmployeeUncheckedCreateInput): Promise<Employee>;
  findByEmail(email: string): Promise<Employee | null>;
  findById(id: string): Promise<Employee | null>;
  save(data: Employee): Promise<Employee>;
}
