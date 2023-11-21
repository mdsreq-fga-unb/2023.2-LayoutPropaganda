import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeListMedia } from "../../../useCases/factories/MakeListMedia";

export async function ListMediaController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const listMediaQuerySchema = z.object({
    onlyAvailable: z
      .enum(["true", "false"])
      .optional()
      .default("false")
      .transform((value) => value === "true"),
    includesText: z.string().optional().default(""),
  });

  const query = listMediaQuerySchema.parse(request.query);

  const listMediaUseCase = MakeListMedia();
  const medias = await listMediaUseCase.execute(query);

  return response.status(200).send(medias);
}
