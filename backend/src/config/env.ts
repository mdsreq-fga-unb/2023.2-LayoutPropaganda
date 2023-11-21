import { z } from "zod";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const initialEnv = dotenv.config();
dotenvExpand.expand(initialEnv);

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "production", "test"]).default("dev"),
  PORT: z.string().regex(/^\d+$/).transform(Number).default("3333"),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_DB: z.string(),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error(_env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
