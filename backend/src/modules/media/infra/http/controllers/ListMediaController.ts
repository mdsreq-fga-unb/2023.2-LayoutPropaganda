import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeListMedia } from "../../../useCases/factories/MakeListMedia";

export async function ListMediaController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const listMediaUseCase = MakeListMedia();
  const medias = await listMediaUseCase.execute();

  return response.status(200).send(medias);
}
