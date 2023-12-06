import { PrismaEmployeeRepository } from "../../infra/repositories/EmployeePrismaRepository";
import { UpdateEmployee } from "../UpdateEmployee";

export function MakeUpdateEmployee() {
  const employeeRepository = new PrismaEmployeeRepository();
  return new UpdateEmployee(employeeRepository);
}
