import { Media } from "@prisma/client";
import { IMediaRepository } from "../repositories/IMediaRepository";
import { NotFoundError } from "../../../shared/errors/NotFoundError";

export class GetMedia {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(id_media: string): Promise<Media> {
    const media = await this.mediaRepository.findById(id_media);

    if (!media) {
      throw new NotFoundError("Media not found");
    }

    return media;
  }
}
