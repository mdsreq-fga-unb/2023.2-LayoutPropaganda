import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { verifyJWT } from "../../../../../shared/middlewares/VerifyJWT";
import { CreateMediaController } from "./CreateMediaController";

export async function mediaRoutes(app: FastifyInstance) {
  app.register(authenticatedRoutes);
}

const authenticatedRoutes: FastifyPluginCallback = (app, _, done) => {
  app.addHook("onRequest", verifyJWT);

  app.post("/", CreateMediaController);

  done();
};
