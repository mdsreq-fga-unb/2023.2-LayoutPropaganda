import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { regions } from "../../../../../shared/utils/regions";
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
    includesText: z.string().optional(),
    regions: z
      .string()
      .transform((d) => d.split(","))
      .refine((e) => e.every((f) => regions.includes(f)))
      .optional(),
    types: z
      .string()
      .transform((d) => d.split(","))
      .refine((e) =>
        e.every((f) => ["painel", "outdoor", "frontlight"].includes(f)),
      )
      .optional(),
  });

  const query = listMediaQuerySchema.parse(request.query);
  console.log(query);
  const listMediaUseCase = MakeListMedia();
  const medias = await listMediaUseCase.execute(query);

  return response.status(200).send(medias);
}
