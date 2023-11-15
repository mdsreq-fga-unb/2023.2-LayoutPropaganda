import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { verifyJWT } from "../../../../../shared/middlewares/VerifyJWT";
import { CreateContactsController } from "./CreateContactsController";
import { ReadContactsController } from "./ReadContactsController";

export async function contactsRoutes(app: FastifyInstance) {
  app.post("/", CreateContactsController);

  app.register(authenticatedRoutes);
}

const authenticatedRoutes: FastifyPluginCallback = (app, _, done) => {
  app.addHook("onRequest", verifyJWT);

  app.get("/", ReadContactsController);

  done();
};
