import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeCreateMediaCashFlow } from "../../../useCases/factories/MakeCreateMediaCashFlow";

export async function CreateMediaCashFlowController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  console.log("FODA");
  const createMediaCashFlowBodySchema = z.object({
    description: z.string(),
    reference_date: z.coerce.date(),
    quantity: z.number(),
  });

  const data = createMediaCashFlowBodySchema.parse(request.body);

  const createMediaCashFlowParamsSchema = z.object({
    id_media: z.string().uuid(),
  });
  const { id_media } = createMediaCashFlowParamsSchema.parse(request.params);

  const createMediaCashFlowUseCase = MakeCreateMediaCashFlow();
  const cashFlow = await createMediaCashFlowUseCase.execute({
    ...data,
    id_media,
  });

  return response.status(200).send(cashFlow);
}
