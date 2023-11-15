import { FastifyInstance } from "fastify";
import { CreateMediaController } from "./CreateMediaController";

export async function mediaRoutes(app: FastifyInstance) {
  app.post("/", CreateMediaController);
}
