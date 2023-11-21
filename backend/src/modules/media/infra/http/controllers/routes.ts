import { FastifyInstance, FastifyPluginCallback } from "fastify";
import multer from "fastify-multer";
import { rmSync } from "fs";
import { multerDiskStorage } from "../../../../../config/DiskStorage";
import { verifyJWT } from "../../../../../shared/middlewares/VerifyJWT";
import { CreateMediaController } from "./CreateMediaController";
import { ListMediaController } from "./ListMediaController";

const upload = multer({ storage: multerDiskStorage });
export async function mediaRoutes(app: FastifyInstance) {
  app.get("/", ListMediaController);

  app.register(authenticatedRoutes);
}

const authenticatedRoutes: FastifyPluginCallback = (app, _, done) => {
  app.addHook("onRequest", verifyJWT);

  app.post(
    "/",
    {
      preHandler: upload.array("media", 3),
      errorHandler(error, request) {
        request.files?.forEach((file) => {
          rmSync(file.path);
        });
        throw error;
      },
    },
    CreateMediaController,
  );

  done();
};
