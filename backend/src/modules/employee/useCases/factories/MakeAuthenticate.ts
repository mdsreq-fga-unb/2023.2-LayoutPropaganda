import { PrismaEmployeeRepository } from "../../infra/repositories/EmployeePrismaRepository";
import { Authenticate } from "../Authenticate";

export function MakeAuthenticate() {
  const employeeRepository = new PrismaEmployeeRepository();
  return new Authenticate(employeeRepository);
}
