import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { ListMedia } from "../ListMedia";

export function MakeListMedia() {
  const mediaRepository = new PrismaMediaRepository();
  return new ListMedia(mediaRepository);
}
