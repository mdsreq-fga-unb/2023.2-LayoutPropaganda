import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeListTask } from "../../../useCases/factories/MakeListTask";

export async function ListTaskController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const listTaskParamsSchema = z.object({
    id_employee: z.string().uuid(),
  });
  const data = listTaskParamsSchema.parse(request.params);

  const listTaskUseCase = MakeListTask();
  const employees = await listTaskUseCase.execute(data);

  return response.status(201).send(employees);
}
