import { IMediaRepository } from "../repositories/IMediaRepository";

interface IRequest {
  onlyAvailable: boolean;
  regions?: string[];
  types?: string[];
  includesText?: string;
}

export class ListMedia {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(data: IRequest) {
    const medias = await this.mediaRepository.listAll(data);

    return medias;
  }
}
