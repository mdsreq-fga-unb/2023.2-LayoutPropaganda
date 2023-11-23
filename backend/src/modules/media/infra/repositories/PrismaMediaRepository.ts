import { Media, Prisma, PrismaClient } from "@prisma/client";
import {
  IMediaRepository,
  listAllDTO,
  saveDTO,
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
        is_deleted: false,
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

  async findById(id: string): Promise<Media | null> {
    const media = await this.prisma.media.findUnique({
      where: {
        id_media: id,
        is_deleted: false,
      },
    });

    return media;
  }

  async save(data: saveDTO): Promise<Media> {
    const media = await this.prisma.media.update({
      where: {
        id_media: data.id_media,
      },
      data,
    });

    return media;
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.media.update({
      where: {
        id_media: id,
      },
      data: {
        is_deleted: true,
      },
    });
  }
}
