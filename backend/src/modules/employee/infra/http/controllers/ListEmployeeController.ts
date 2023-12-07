import { FastifyReply, FastifyRequest } from "fastify";
import { MakeListEmployee } from "../../../useCases/factories/MakeListEmployee";

export async function ListEmployeeController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const listEmployeeUseCase = MakeListEmployee();
  const employees = await listEmployeeUseCase.execute();

  return response.status(201).send(employees);
}
