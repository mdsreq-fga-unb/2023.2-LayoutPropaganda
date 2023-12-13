import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { GetMedia } from "../GetMedia";

export function MakeGetMedia() {
  const mediaRepository = new PrismaMediaRepository();
  return new GetMedia(mediaRepository);
}
