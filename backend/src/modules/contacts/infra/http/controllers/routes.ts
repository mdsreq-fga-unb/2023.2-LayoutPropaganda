import { FastifyInstance } from "fastify";
import { CreateContactsController } from "./CreateContactsController";
import { ReadContactsController } from "./ReadContactsController";

export async function contactsRoutes(app: FastifyInstance) {
  app.post("/", CreateContactsController);
  app.get("/", ReadContactsController);
}
