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

  async findByEmail(email: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: {
        email,
      },
    });

    return employee;
  }

  async findById(id_employee: string): Promise<Employee | null> {
    return this.prisma.employee.findUnique({
      where: {
        id_employee,
      },
    });
  }

  save(data: Employee): Promise<Employee> {
    return this.prisma.employee.update({
      where: {
        id_employee: data.id_employee,
      },
      data,
    });
  }

  async listAll(): Promise<Employee[]> {
    return this.prisma.employee.findMany();
  }
}
