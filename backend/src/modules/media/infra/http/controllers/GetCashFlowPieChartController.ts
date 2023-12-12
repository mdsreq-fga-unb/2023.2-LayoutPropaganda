import { FastifyReply, FastifyRequest } from "fastify";
import { MakeMakeGetCashFlowPieChart } from "../../../useCases/factories/MakeGetCashFlowPieChart";

export async function GetCashFlowPieChartController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const createMediaCashFlowUseCase = MakeMakeGetCashFlowPieChart();
  const res = await createMediaCashFlowUseCase.execute();

  return response.status(200).send(res);
}
