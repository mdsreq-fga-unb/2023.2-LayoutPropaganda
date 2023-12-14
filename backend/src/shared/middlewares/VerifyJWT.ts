import { PrismaClient } from ".prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyJWT(
  request: FastifyRequest,
  response: FastifyReply,
) {
  try {
    const token = await request.jwtVerify();
    const user = await new PrismaClient().employee.findUnique({
      where: {
        id_employee: token.sign.sub,
      },
    });
    if (!user) {
      throw new Error();
    }
    request.user = user.id_employee;
  } catch {
    return response.status(401).send({ message: "Unauthorized" });
  }
}
