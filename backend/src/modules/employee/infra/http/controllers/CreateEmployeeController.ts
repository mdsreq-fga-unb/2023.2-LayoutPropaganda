import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeCreateEmployee } from "../../../useCases/factories/MakeCreateEmployee";

export async function CreateEmployeeController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const createEmployeeBodySchema = z.object({
    first_name: z.string().max(255),
    last_name: z.string().max(255),
    email: z.string().email().max(255),
    cpf: z.string().max(255),
    password: z.string().max(255),
  });
  const data = createEmployeeBodySchema.parse(request.body);

  const createEmployeeUseCase = MakeCreateEmployee();
  const employee = await createEmployeeUseCase.execute(data);

  return response.status(201).send(employee);
}
