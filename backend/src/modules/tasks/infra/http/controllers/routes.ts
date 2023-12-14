import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { verifyJWT } from "../../../../../shared/middlewares/VerifyJWT";
import { CreateTaskController } from "./CreateTaskController";
import { DeleteTaskController } from "./DeleteTaskController";
import { ListTaskController } from "./ListTaskController";
import { UpdateTaskController } from "./UpdateTaskController";

export async function tasksRoutes(app: FastifyInstance) {
  app.register(authenticatedRoutes);
}

const authenticatedRoutes: FastifyPluginCallback = (app, _, done) => {
  app.addHook("onRequest", verifyJWT);

  app.post("/", CreateTaskController);
  app.get("/", ListTaskController);
  app.delete("/:id_task", DeleteTaskController);
  app.put("/:id_task", UpdateTaskController);

  done();
};
