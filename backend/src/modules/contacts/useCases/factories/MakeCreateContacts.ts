import { PrismaContactsRepository } from "../../infra/repositories/ContactsPrismaRepository";
import { CreateContacts } from "../CreateContacts";

export function MakeCreateContacts() {
  const contactsRepository = new PrismaContactsRepository();
  return new CreateContacts(contactsRepository);
}
