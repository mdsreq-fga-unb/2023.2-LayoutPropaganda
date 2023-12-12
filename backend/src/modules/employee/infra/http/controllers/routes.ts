import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { verifyJWT } from "../../../../../shared/middlewares/VerifyJWT";
import { AuthenticateController } from "./AuthenticateController";
import { CreateEmployeeController } from "./CreateEmployeeController";
import { ListEmployeeController } from "./ListEmployeeController";
import { UpdateEmployeeController } from "./UpdateEmployeeController";
import { DeleteEmployeeController } from "./DeleteEmployeeController";

export async function employeeRoutes(app: FastifyInstance) {
  app.post("/authenticate", AuthenticateController);

  app.register(authenticatedRoutes);
}

const authenticatedRoutes: FastifyPluginCallback = (app, _, done) => {
  app.addHook("onRequest", verifyJWT);

  app.post("/", CreateEmployeeController);
  app.put("/:id_employee", UpdateEmployeeController);
  app.get("/", ListEmployeeController);
  app.delete("/:id_employee", DeleteEmployeeController);

  done();
};
