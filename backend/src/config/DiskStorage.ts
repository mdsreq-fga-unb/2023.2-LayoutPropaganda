import { randomUUID } from "crypto";
import multer from "fastify-multer";
import path from "path";

export const multerDiskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "files"));
  },
  filename: function (req, file, cb) {
    cb(null, randomUUID() + path.extname(file.originalname));
  },
});
