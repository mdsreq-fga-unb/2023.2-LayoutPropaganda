import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";

interface IRequest {
  id_employee: string;
}

export class DeleteEmployee {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public async execute(data: IRequest): Promise<void> {
    const employee = await this.employeeRepository.findById(data.id_employee);
    if (!employee) {
      throw new NotFoundError("Employee not found");
    }

    await this.employeeRepository.deleteById(employee.id_employee);
  }
}
