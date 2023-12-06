import { ConflictError } from "../../../shared/errors/ConflictError";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";

interface IRequest {
  id_employee: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  cpf?: string;
  password?: string;
}

interface IResponse {
  id_employee: string;
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  password: string;
  is_deleted: boolean;
  updated_at: Date;
  created_at: Date;
}

export class UpdateEmployee {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const employee = await this.employeeRepository.findById(data.id_employee);
    if (!employee) {
      throw new ConflictError("Email already exists");
    }

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        employee[key] = value;
      }
    });

    await this.employeeRepository.save(employee);

    return employee;
  }
}
