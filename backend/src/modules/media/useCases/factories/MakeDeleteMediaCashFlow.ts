import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { DeleteMediaCashFlow } from "../DeleteMediaCashFlow";

export function MakeDeleteMediaCashFlow() {
  const mediaRepository = new PrismaMediaRepository();
  return new DeleteMediaCashFlow(mediaRepository);
}
