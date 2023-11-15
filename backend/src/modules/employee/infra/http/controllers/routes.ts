import { FastifyInstance } from "fastify";
import { CreateEmployeeController } from "./CreateEmployeeController";

export async function employeeRoutes(app: FastifyInstance) {
  app.post("/employee", CreateEmployeeController);
}
