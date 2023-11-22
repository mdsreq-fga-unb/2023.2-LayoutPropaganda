import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifyStatic from "@fastify/static";
import fastify from "fastify";
import multer from "fastify-multer";
import path from "path";
import { ZodError } from "zod";
import { env } from "./config/env";
import { contactsRoutes } from "./modules/contacts/infra/http/controllers/routes";
import { employeeRoutes } from "./modules/employee/infra/http/controllers/routes";
import { mediaRoutes } from "./modules/media/infra/http/controllers/routes";
import { AppError } from "./shared/errors/interface/AppError";

export const app = fastify();

app.register(fastifyCookie);
app.register(fastifyCors);
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "30m",
  },
});
app.register(multer.contentParser);

app.register(employeeRoutes, { prefix: "/employees" });
app.register(contactsRoutes, { prefix: "/contacts" });
app.register(mediaRoutes, { prefix: "/medias" });
app.register(fastifyStatic, {
  root: path.join(__dirname, "files"),
  prefix: "/files/",
});

app.setErrorHandler((error, _, response) => {
  if (error instanceof ZodError) {
    return response.status(400).send({
      message: "Validation Error",
      issues: error.format(),
    });
  } else if (error instanceof AppError) {
    return response.status(error.statusCode).send({
      message: error.message,
    });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Should log to external tool like DataDog/NewRelic/Sentry
  }

  return response.status(500).send({ error: "Internal Server Error" });
});
