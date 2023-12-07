import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { IMediaRepository } from "../repositories/IMediaRepository";

export class DeleteMediaCashFlow {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(id_media_cash_flow: string): Promise<void> {
    const cashFlow =
      await this.mediaRepository.findCashFlowById(id_media_cash_flow);
    if (!cashFlow) {
      throw new NotFoundError("Media not found");
    }

    await this.mediaRepository.deleteCashFlowById(id_media_cash_flow);
  }
}
