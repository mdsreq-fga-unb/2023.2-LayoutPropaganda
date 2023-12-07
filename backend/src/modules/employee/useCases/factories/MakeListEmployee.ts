import { PrismaEmployeeRepository } from "../../infra/repositories/EmployeePrismaRepository";
import { ListEmployee } from "../ListEmployee";

export function MakeListEmployee() {
  const employeeRepository = new PrismaEmployeeRepository();
  return new ListEmployee(employeeRepository);
}
