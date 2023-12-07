import { MediaCashFlow } from "@prisma/client";
import { IMediaRepository } from "../repositories/IMediaRepository";

interface IRequest {
  id_media: string;
  description: string;
  reference_date: Date;
  quantity: number;
}

export class CreateMediaCashFlow {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(data: IRequest): Promise<MediaCashFlow> {
    const cashFlow = await this.mediaRepository.addCashFlow(data);

    return cashFlow;
  }
}
