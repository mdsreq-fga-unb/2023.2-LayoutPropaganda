import { FastifyInstance, FastifyPluginCallback } from "fastify";
import multer from "fastify-multer";
import { rmSync } from "fs";
import { multerDiskStorage } from "../../../../../config/DiskStorage";
import { verifyJWT } from "../../../../../shared/middlewares/VerifyJWT";
import { CreateMediaCashFlowController } from "./CreateMediaCashFlowController";
import { CreateMediaController } from "./CreateMediaController";
import { DeleteMediaController } from "./DeleteMediaController";
import { GetCashFlowPieChartController } from "./GetCashFlowPieChartController";
import { ListMediaCashFlowController } from "./ListMediaCashFlowController";
import { ListMediaController } from "./ListMediaController";
import { UpdateMediaController } from "./UpdateMediaController";

const upload = multer({ storage: multerDiskStorage });
export async function mediaRoutes(app: FastifyInstance) {
  app.get("/", ListMediaController);

  app.register(authenticatedRoutes);
}

const authenticatedRoutes: FastifyPluginCallback = (app, _, done) => {
  app.addHook("onRequest", verifyJWT);

  app.post("/cashFlow/:id_media", CreateMediaCashFlowController);
  app.get("/cashFlow/:id_media", ListMediaCashFlowController);

  app.get("cashFlow/pieChart", GetCashFlowPieChartController);

  app.put("/:id_media", UpdateMediaController);
  app.delete("/:id_media", DeleteMediaController);

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
