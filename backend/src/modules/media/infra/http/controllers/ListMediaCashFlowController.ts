import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeListMediaCashFlow } from "../../../useCases/factories/MakeListMediaCashFlow";

export async function ListMediaCashFlowController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const listMediaCashFlowParamsSchema = z.object({
    id_media: z.string().uuid(),
  });
  const { id_media } = listMediaCashFlowParamsSchema.parse(request.params);

  const listMediaCashFlowUseCase = MakeListMediaCashFlow();
  await listMediaCashFlowUseCase.execute(id_media);

  return response.status(200).send();
}
