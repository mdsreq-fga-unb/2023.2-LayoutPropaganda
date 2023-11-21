import { Contacts } from "@prisma/client";
import { IContactsRepository } from "../repositories/IContactsRepository";

export class ReadContacts {
  constructor(private contactsRepository: IContactsRepository) {}

  public async execute(): Promise<Contacts[]> {
    const contacts = await this.contactsRepository.listAll();

    return contacts;
  }
}
