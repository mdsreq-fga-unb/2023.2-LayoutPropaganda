import { PrismaContactsRepository } from "../../infra/repositories/PrismaContactsRepository";
import { CreateContacts } from "../CreateContacts";

export function MakeCreateContacts() {
  const contactsRepository = new PrismaContactsRepository();
  return new CreateContacts(contactsRepository);
}
