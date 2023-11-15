import { Media, Prisma } from "@prisma/client";

export interface IMediaRepository {
  create(data: Prisma.MediaUncheckedCreateInput): Promise<Media>;
}
