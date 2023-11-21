import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { verifyJWT } from "../../../../../shared/middlewares/VerifyJWT";
import { AuthenticateController } from "./AuthenticateController";
import { CreateEmployeeController } from "./CreateEmployeeController";

export async function employeeRoutes(app: FastifyInstance) {
  app.post("/authenticate", AuthenticateController);

  app.register(authenticatedRoutes);
}

const authenticatedRoutes: FastifyPluginCallback = (app, _, done) => {
  app.addHook("onRequest", verifyJWT);

  app.post("/", CreateEmployeeController);

  done();
};
