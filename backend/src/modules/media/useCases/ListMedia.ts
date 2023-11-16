import { IMediaRepository } from "../repositories/IMediaRepository";

export class ListMedia {
    constructor(private mediaRepository: IMediaRepository) {}

    public async execute() {
        const medias = await this.mediaRepository.listAll();

        return medias;
    }
}