import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeDeleteMedia } from "../../../useCases/factories/MakeDeleteMedia";

export async function DeleteMediaController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const deleteMediaParamsSchema = z.object({
    id_media: z.string().uuid(),
  });
  console.log(request.params);

  const { id_media } = deleteMediaParamsSchema.parse(request.params);

  const deleteMediaUseCase = MakeDeleteMedia();
  await deleteMediaUseCase.execute({ id_media });

  return response.status(200).send();
}
