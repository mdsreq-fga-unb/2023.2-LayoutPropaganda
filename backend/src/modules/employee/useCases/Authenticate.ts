import { Employee } from "@prisma/client";
import { compare } from "bcrypt";
import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  employee: Employee;
}

export class Authenticate {
  constructor(private employeesRepository: IEmployeeRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const employee = await this.employeesRepository.findByEmail(email);
    if (!employee) {
      throw new NotFoundError("Employee not found");
    }

    const doesPasswordMatches = await compare(password, employee.password);
    if (!doesPasswordMatches) {
      throw new NotFoundError("Employee not found");
    }

    return {
      employee,
    };
  }
}
