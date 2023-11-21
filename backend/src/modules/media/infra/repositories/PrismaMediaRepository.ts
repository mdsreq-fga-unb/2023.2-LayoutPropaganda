import { Media, Prisma, PrismaClient } from "@prisma/client";
import { IMediaRepository } from "../../repositories/IMediaRepository";

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

   async readOnlyAvailable(): Promise<Media[] | undefined> {
    const medias = await this.prisma.media.findMany({
      where: {
        is_available: true,
      },
    })
    return medias;
  }
}
