import { hash } from "bcrypt";
import { ConflictError } from "../../../shared/errors/ConflictError";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";

interface IRequest {
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  password: string;
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
export class CreateEmployee {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const alreadyExists = await this.employeeRepository.findByEmail(data.email);
    if (alreadyExists) {
      throw new ConflictError("Email already exists");
    }

    data.password = await hash(data.password, 12);
    const employee = await this.employeeRepository.create(data);

    return employee;
  }
}
