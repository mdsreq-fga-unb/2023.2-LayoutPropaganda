import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { IMediaRepository } from "../repositories/IMediaRepository";

interface IRequest {
  id_media: string;
  type?: string;
  region?: string;
  description?: string;
  height?: number;
  width?: number;
  latitude?: number;
  longitude?: number;
  is_available?: boolean;
  // MediaImages?: string[];
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

export class UpdateMedia {
  constructor(private mediaRepository: IMediaRepository) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const media = await this.mediaRepository.findById(data.id_media);
    if (!media) {
      throw new NotFoundError("Media not found");
    }

    const updatedMedia = await this.mediaRepository.save(data);

    return updatedMedia;
  }
}
