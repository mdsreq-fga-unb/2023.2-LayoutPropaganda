import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeDeleteTask } from "../../../useCases/factories/MakeDeleteTask";

export async function DeleteTaskController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const updateParamsSchema = z.object({
    id_task: z.string().uuid(),
  });
  const { id_task } = updateParamsSchema.parse(request.params);

  const updateUseCase = MakeDeleteTask();
  await updateUseCase.execute(id_task);

  return response.status(200).send();
}
