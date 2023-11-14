import { FastifyInstance } from "fastify";
import { CreateContactsController } from "./CreateContactsController";

export async function contactsRoutes(app: FastifyInstance) {
  app.post("/contacts", CreateContactsController);
}
