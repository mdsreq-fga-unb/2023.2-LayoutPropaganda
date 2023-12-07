import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { CreateMediaCashFlow } from "../CreateMediaCashFlow";

export function MakeCreateMediaCashFlow() {
  const mediaRepository = new PrismaMediaRepository();
  return new CreateMediaCashFlow(mediaRepository);
}
