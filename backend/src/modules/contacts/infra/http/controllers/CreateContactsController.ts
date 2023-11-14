import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeCreateContacts } from "../../../useCases/factories/MakeCreateContacts";

export async function CreateContactsController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const createContactBodySchema = z.object({
    name: z.string().max(255),
    email: z.string().email().max(255),
    phone: z.string().max(255),
    message: z.string().max(255).optional().default(""),
  });
  const data = createContactBodySchema.parse(request.body);

  const createContactUseCase = MakeCreateContacts();
  const contact = await createContactUseCase.execute(data);

  return response.status(201).send(contact);
}
