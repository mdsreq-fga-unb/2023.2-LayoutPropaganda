import { FastifyReply, FastifyRequest } from "fastify";
import { MakeListTask } from "../../../useCases/factories/MakeListTask";

export async function ListTaskController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const listTaskUseCase = MakeListTask();
  const employees = await listTaskUseCase.execute({
    id_employee: request.user as string,
  });

  return response.status(200).send(employees);
}
