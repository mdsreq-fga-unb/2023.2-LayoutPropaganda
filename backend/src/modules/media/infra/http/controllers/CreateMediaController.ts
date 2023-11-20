import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeCreateMedia } from "../../../useCases/factories/MakeCreateMedia";

export async function CreateMediaController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const createMediaBodySchema = z.object({
    type: z.string().max(255),
    region: z.string().max(255),
    description: z.string().max(255),
    latitude: z.number(),
    longitude: z.number(),
    is_available: z.boolean().optional().default(true),
    MediaImages: z.array(z.string()).optional().default([]),
  });
  console.log(request.body);

  const data = createMediaBodySchema.parse(request.body);

  const createMediaUseCase = MakeCreateMedia();
  const media = await createMediaUseCase.execute(data);

  return response.status(201).send(media);
}
