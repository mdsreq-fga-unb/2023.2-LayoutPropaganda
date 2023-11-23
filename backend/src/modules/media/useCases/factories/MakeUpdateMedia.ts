import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { UpdateMedia } from "../UpdateMedia";

export function MakeUpdateMedia() {
  const mediaRepository = new PrismaMediaRepository();
  return new UpdateMedia(mediaRepository);
}
