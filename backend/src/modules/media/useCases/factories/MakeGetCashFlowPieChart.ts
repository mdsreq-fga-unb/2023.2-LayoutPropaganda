import { PrismaMediaRepository } from "../../infra/repositories/PrismaMediaRepository";
import { GetCashFlowPieChart } from "../GetCashFlowPieChart";

export function MakeMakeGetCashFlowPieChart() {
  const mediaRepository = new PrismaMediaRepository();
  return new GetCashFlowPieChart(mediaRepository);
}
