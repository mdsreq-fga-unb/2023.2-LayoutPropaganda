import { PrismaEmployeeRepository } from "../../infra/repositories/EmployeePrismaRepository";
import { CreateEmployee } from "../CreateEmployee";

export function MakeCreateEmployee() {
  const employeeRepository = new PrismaEmployeeRepository();
  return new CreateEmployee(employeeRepository);
}
