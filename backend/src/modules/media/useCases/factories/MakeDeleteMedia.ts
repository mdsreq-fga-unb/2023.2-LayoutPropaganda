import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { DeleteMedia } from "../DeleteMedia";

export function MakeDeleteMedia() {
  const mediaRepository = new PrismaMediaRepository();
  return new DeleteMedia(mediaRepository);
}
