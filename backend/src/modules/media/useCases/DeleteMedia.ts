import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { IMediaRepository } from "../repositories/IMediaRepository";

interface IRequest {
  id_media: string;
}

export class DeleteMedia {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(data: IRequest): Promise<void> {
    const media = await this.mediaRepository.findById(data.id_media);
    if (!media) {
      throw new NotFoundError("Media not found");
    }

    await this.mediaRepository.deleteById(data.id_media);
  }
}
