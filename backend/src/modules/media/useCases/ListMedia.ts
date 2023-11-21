import { IMediaRepository } from "../repositories/IMediaRepository";

interface IRequest {
  onlyAvailable: boolean;
  includesText: string;
}

export class ListMedia {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(data: IRequest) {
    const medias = await this.mediaRepository.listAll(data);

    return medias;
  }
}
