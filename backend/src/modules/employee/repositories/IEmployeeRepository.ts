import { Employee, Prisma } from "@prisma/client";

export interface IEmployeeRepository {
  create(data: Prisma.EmployeeUncheckedCreateInput): Promise<Employee>;
  findByEmail(email: string): Promise<Employee | null>;
}
