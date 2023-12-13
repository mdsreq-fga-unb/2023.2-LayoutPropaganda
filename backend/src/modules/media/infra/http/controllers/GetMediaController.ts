import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeGetMedia } from "../../../useCases/factories/MakeGetMedia";

export async function GetMediaController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const listMediaCashFlowParamsSchema = z.object({
    id_media: z.string().uuid(),
  });
  const { id_media } = listMediaCashFlowParamsSchema.parse(request.params);

  const getMediaUseCase = MakeGetMedia();
  const res = await getMediaUseCase.execute(id_media);

  return response.status(200).send(res);
}
