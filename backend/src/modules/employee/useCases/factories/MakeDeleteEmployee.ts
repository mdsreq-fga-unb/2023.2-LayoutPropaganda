import { PrismaEmployeeRepository } from "../../infra/repositories/EmployeePrismaRepository";
import { DeleteEmployee } from "../DeleteEmployee";

export function MakeDeleteEmployee() {
  const employeeRepository = new PrismaEmployeeRepository();
  return new DeleteEmployee(employeeRepository);
}
