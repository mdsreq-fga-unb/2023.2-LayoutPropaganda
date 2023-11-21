import { Media, Prisma } from "@prisma/client";

export interface IMediaRepository {
  create(data: Prisma.MediaUncheckedCreateInput): Promise<Media>;
  listAll(data: listAllDTO): Promise<Media[]>;
}

export type listAllDTO = {
  onlyAvailable: boolean;
  includesText: string;
};
