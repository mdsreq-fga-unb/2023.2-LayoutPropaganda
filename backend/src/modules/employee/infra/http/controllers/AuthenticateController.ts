import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeAuthenticate } from "../../../useCases/factories/MakeAuthenticate";

export async function AuthenticateController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const registerBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  const { email, password } = registerBodySchema.parse(request.body);

  const authenticateUseCase = MakeAuthenticate();
  const { employee } = await authenticateUseCase.execute({ email, password });

  const token = await response.jwtSign({
    sign: {
      sub: employee.id_employee,
    },
  });

  const refreshToken = await response.jwtSign({
    sign: {
      sub: employee.id_employee,
      expiresIn: "7d",
    },
  });

  return response
    .setCookie("refresh-token", refreshToken, {
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .setCookie("token", token, {
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .status(200)
    .send({ token });
}
