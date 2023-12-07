import { Media, MediaCashFlow, Prisma } from "@prisma/client";

export interface IMediaRepository {
  create(data: Prisma.MediaUncheckedCreateInput): Promise<Media>;
  listAll(data: listAllDTO): Promise<Media[]>;
  findById(id: string): Promise<Media | null>;
  save(data: saveDTO): Promise<Media>;
  deleteById(id: string): Promise<void>;
  addCashFlow(
    data: Prisma.MediaCashFlowUncheckedCreateInput,
  ): Promise<MediaCashFlow>;
  listCashFlowByMediaId(id_media: string): Promise<MediaCashFlow[]>;
  listAllWithCashFlow(): Promise<
    (Media & { MediaCashFlow: MediaCashFlow[] })[]
  >;
  findCashFlowById(id: string): Promise<MediaCashFlow | null>;
  deleteCashFlowById(id: string): Promise<void>;
}

export type listAllDTO = {
  onlyAvailable: boolean;
  includesText?: string;
  regions?: string[];
  types?: string[];
};

export type saveDTO = Prisma.MediaUpdateInput & { id_media: string };
