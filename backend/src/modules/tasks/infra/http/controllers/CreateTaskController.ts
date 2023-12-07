import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeCreateTask } from "../../../useCases/factories/MakeCreateTask";

export async function CreateTaskController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const createTaskBodySchema = z.object({
    title: z.string().max(255),
    description: z.string().max(255),
    deadline: z.date(),
    status: z.enum(["TODO", "DOING", "DONE"]),
  });
  const data = createTaskBodySchema.parse(request.body);

  const createTaskParamsSchema = z.object({
    id_employee: z.string().uuid(),
  });
  const { id_employee } = createTaskParamsSchema.parse(request.params);

  const createTaskUseCase = MakeCreateTask();
  await createTaskUseCase.execute({ ...data, id_employee });

  return response.status(201).send();
}
