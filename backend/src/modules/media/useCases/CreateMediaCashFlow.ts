import { MediaCashFlow } from "@prisma/client";
import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { IMediaRepository } from "../repositories/IMediaRepository";

interface IRequest {
  description: string;
  reference_date: Date;
  quantity: number;
  id_media: string;
}

export class CreateMediaCashFlow {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(data: IRequest): Promise<MediaCashFlow> {
    const media = await this.mediaRepository.findById(data.id_media);
    if (!media) {
      throw new NotFoundError("Media was not found");
    }

    return this.mediaRepository.addCashFlow(data);
  }
}
