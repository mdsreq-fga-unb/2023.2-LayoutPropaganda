import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { CreateMedia } from "../CreateMedia";

export function MakeCreateMedia() {
  const mediaRepository = new PrismaMediaRepository();
  return new CreateMedia(mediaRepository);
}
