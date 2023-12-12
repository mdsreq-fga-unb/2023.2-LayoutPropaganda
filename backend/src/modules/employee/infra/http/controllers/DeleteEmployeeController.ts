import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeDeleteEmployee } from "../../../useCases/factories/MakeDeleteEmployee";

export async function DeleteEmployeeController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const updateParamsSchema = z.object({
    id_employee: z.string().uuid(),
  });

  const { id_employee } = updateParamsSchema.parse(request.params);

  const DeleteEmployeeUseCase = MakeDeleteEmployee();

  await DeleteEmployeeUseCase.execute({ id_employee });

  return response.status(204).send();
}
