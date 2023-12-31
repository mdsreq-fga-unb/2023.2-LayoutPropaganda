import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { BadRequestError } from "../../../../../shared/errors/BadRequestError";
import { MakeUpdateEmployee } from "../../../useCases/factories/MakeUpdateEmployee";

export async function UpdateEmployeeController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const updateBodySchema = z.object({
    first_name: z.string().max(255).optional(),
    last_name: z.string().max(255).optional(),
    email: z.string().email().max(255).optional(),
    cpf: z.string().max(255).optional(),
    password: z.string().max(255).min(6).optional(),
  });
  const updateParamsSchema = z.object({
    id_employee: z.string().uuid(),
  });

  const data = updateBodySchema.parse(request.body);
  const { id_employee } = updateParamsSchema.parse(request.params);

  if (Object.keys(data).length === 0) {
    throw new BadRequestError("No data to update");
  }

  const updateUseCase = MakeUpdateEmployee();
  const updatedEmployee = await updateUseCase.execute({ ...data, id_employee });

  return response.status(200).send(updatedEmployee);
}
