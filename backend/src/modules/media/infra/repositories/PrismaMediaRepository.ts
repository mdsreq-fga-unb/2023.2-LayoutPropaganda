import { Media, Prisma, PrismaClient } from "@prisma/client";
import {
  IMediaRepository,
  listAllDTO,
} from "../../repositories/IMediaRepository";

export class PrismaMediaRepository implements IMediaRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: Prisma.MediaUncheckedCreateInput): Promise<Media> {
    const media = await this.prisma.media.create({
      data,
    });

    return media;
  }

  async listAll(data: listAllDTO): Promise<Media[]> {
    const medias = await this.prisma.media.findMany({
      where: {
        is_available: data.onlyAvailable ? true : undefined,
        OR: data.includesText
          ? [
              {
                description: {
                  contains: data.includesText,
                  mode: "insensitive",
                },
              },
              {
                region: {
                  contains: data.includesText,
                  mode: "insensitive",
                },
              },
              {
                type: {
                  contains: data.includesText,
                  mode: "insensitive",
                },
              },
            ]
          : undefined,
      },
      include: {
        MediaImages: true,
      },
    });

    return medias;
  }
}
