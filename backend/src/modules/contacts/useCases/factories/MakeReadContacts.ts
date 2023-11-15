import { PrismaContactsRepository } from "../../infra/repositories/PrismaContactsRepository";
import { ReadContacts } from "../ReadContacts";

export function MakeReadContacts() {
  const contactsRepository = new PrismaContactsRepository();
  return new ReadContacts(contactsRepository);
}
