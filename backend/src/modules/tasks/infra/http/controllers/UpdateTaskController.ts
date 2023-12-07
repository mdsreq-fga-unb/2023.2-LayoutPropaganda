import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeUpdateTask } from "../../../useCases/factories/MakeUpdate";

export async function UpdateTaskController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const updateTaskBodySchema = z.object({
    title: z.string().max(255).optional(),
    description: z.string().max(255).optional(),
    deadline: z.date().optional(),
    status: z.enum(["TODO", "DOING", "DONE"]).optional(),
  });
  const data = updateTaskBodySchema.parse(request.body);

  const updateTaskParamsSchema = z.object({
    id_task: z.string().uuid(),
  });
  const { id_task } = updateTaskParamsSchema.parse(request.params);

  const updateTaskUseCase = MakeUpdateTask();
  await updateTaskUseCase.execute({ ...data, id_task });

  return response.status(201).send();
}
