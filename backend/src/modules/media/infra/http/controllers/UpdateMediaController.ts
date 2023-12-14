import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { BadRequestError } from "../../../../../shared/errors/BadRequestError";
import { regions } from "../../../../../shared/utils/regions";
import { MakeUpdateMedia } from "../../../useCases/factories/MakeUpdateMedia";

export async function UpdateMediaController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const updateMediaBodySchema = z.object({
    type: z.enum(["triedo", "outdoor", "frontlight"]).optional(),
    region: z.enum(regions),
    description: z.string().max(255).optional(),
    latitude: z.coerce.number().optional(),
    longitude: z.coerce.number().optional(),
    is_available: z.boolean().optional(),
  });
  const updateMediaParamsSchema = z.object({
    id_media: z.string().uuid(),
  });
  const { id_media } = updateMediaParamsSchema.parse(request.params);

  const data = updateMediaBodySchema.parse(request.body);
  if (Object.keys(data).length === 0) {
    throw new BadRequestError("No data to update");
  }

  const updateMediaUseCase = MakeUpdateMedia();
  const updatedMedia = await updateMediaUseCase.execute({ ...data, id_media });

  return response.status(200).send(updatedMedia);
}
