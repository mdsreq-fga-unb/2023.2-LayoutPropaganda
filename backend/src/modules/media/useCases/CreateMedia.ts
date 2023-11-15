import { IMediaRepository } from "../repositories/IMediaRepository";

interface IRequest {
  type: string;
  region: string;
  description: string;
  latitude: number;
  longitude: number;
  is_available: boolean;
  MediaImages: string[];
}

interface IResponse {
  id_media: string;
  type: string;
  region: string;
  description: string;
  latitude: number;
  longitude: number;
  is_deleted: boolean;
  is_available: boolean;
  updated_at: Date;
  created_at: Date;
}

export class CreateMedia {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const media = await this.mediaRepository.create({
      ...data,
      MediaImages:
        data.MediaImages.length > 0
          ? {
            create: data.MediaImages.map((url) => ({ url })),
          }
          : undefined,
    });

    return media;
  }
}
