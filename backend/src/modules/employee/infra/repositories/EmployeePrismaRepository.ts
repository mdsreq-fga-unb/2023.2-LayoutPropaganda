import { Employee, Prisma, PrismaClient } from "@prisma/client";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

export class PrismaEmployeeRepository implements IEmployeeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: Prisma.EmployeeUncheckedCreateInput): Promise<Employee> {
    const employee = await this.prisma.employee.create({ data });
    return employee;
  }
}
