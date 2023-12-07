import { MediaCashFlow } from "@prisma/client";
import { IMediaRepository } from "../repositories/IMediaRepository";

export class ListMediaCashFlow {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(id_media: string): Promise<MediaCashFlow[]> {
    const cashFlow = await this.mediaRepository.listCashFlowByMediaId(id_media);

    return cashFlow;
  }
}
