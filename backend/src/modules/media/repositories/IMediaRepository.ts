import { Media, Prisma } from "@prisma/client";

export interface IMediaRepository {
  create(data: Prisma.MediaUncheckedCreateInput): Promise<Media>;
  listAll(data: listAllDTO): Promise<Media[]>;
  findById(id: string): Promise<Media | null>;
  save(data: saveDTO): Promise<Media>;
  deleteById(id: string): Promise<void>;
}

export type listAllDTO = {
  onlyAvailable: boolean;
  includesText?: string;
  regions?: string[];
  types?: string[];
};

export type saveDTO = Prisma.MediaUpdateInput & { id_media: string };
