import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeDeleteMediaCashFlow } from "../../../useCases/factories/MakeDeleteMediaCashFlow";

export async function DeleteMediaCashFlowController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const deleteMediaCashFlowParamsSchema = z.object({
    id_media_cash_flow: z.string().uuid(),
  });
  const { id_media_cash_flow } = deleteMediaCashFlowParamsSchema.parse(
    request.params,
  );

  const deleteMediaCashFlowUseCase = MakeDeleteMediaCashFlow();
  await deleteMediaCashFlowUseCase.execute(id_media_cash_flow);

  return response.status(204).send();
}
