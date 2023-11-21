import "fastify";

declare module "fastify" {
  export interface FastifyRequest {
    files?: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    }[];
  }
}
