import { IContactsRepository } from "../repositories/IContactsRepository";

interface IRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface IResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  wasContacted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateContacts {
  constructor(private contactsRepository: IContactsRepository) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const contact = await this.contactsRepository.create(data);

    return contact;
  }
}
