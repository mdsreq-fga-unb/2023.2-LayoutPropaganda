import { FastifyReply, FastifyRequest } from "fastify";
import { MakeReadContacts } from "../../../useCases/factories/MakeReadContacts";

export async function ReadContactsController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const createContactUseCase = MakeReadContacts();
  const contacts = await createContactUseCase.execute();

  return response.status(200).send(contacts);
}
