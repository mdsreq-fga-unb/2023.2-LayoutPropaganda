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
}
