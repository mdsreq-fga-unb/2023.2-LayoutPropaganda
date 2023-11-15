import { Contacts } from "@prisma/client";
import { IContactsRepository } from "../repositories/IContactsRepository";

interface IRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export class CreateContacts {
  constructor(private contactsRepository: IContactsRepository) {}

  public async execute(data: IRequest): Promise<Contacts> {
    const contact = await this.contactsRepository.create(data);

    return contact;
  }
}
