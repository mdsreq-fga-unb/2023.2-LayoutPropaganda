import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { BadRequestError } from "../../../../../shared/errors/BadRequestError";
import { regions } from "../../../../../shared/utils/regions";
import { MakeCreateMedia } from "../../../useCases/factories/MakeCreateMedia";

export async function CreateMediaController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const createMediaBodySchema = z.object({
    type: z.enum(["painel", "outdoor", "frontlight"]),
    region: z.enum(regions),
    description: z.string().max(255),
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
    is_available: z
      .enum(["true", "false"])
      .optional()
      .default("true")
      .transform((value) => value === "true"),
    MediaImages: z.array(z.string()).optional().default([]),
  });

  const data = createMediaBodySchema.parse(request.body);
  data.MediaImages =
    request.files?.map((file) => {
      if (!(file.mimetype as string).startsWith("image")) {
        throw new BadRequestError("File must be an image");
      }
      return file.filename;
    }) ?? [];

  const createMediaUseCase = MakeCreateMedia();
  const media = await createMediaUseCase.execute(data);

  return response.status(201).send(media);
}
