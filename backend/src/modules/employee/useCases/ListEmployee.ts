import { Employee } from "@prisma/client";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";

export class ListEmployee {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public async execute(): Promise<Employee[]> {
    const employees = await this.employeeRepository.listAll();
    return employees;
  }
}
