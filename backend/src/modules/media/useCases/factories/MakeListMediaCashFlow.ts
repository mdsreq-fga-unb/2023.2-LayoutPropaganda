import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { ListMediaCashFlow } from "../ListMediaCashFlow";

export function MakeListMediaCashFlow() {
  const mediaRepository = new PrismaMediaRepository();
  return new ListMediaCashFlow(mediaRepository);
}
