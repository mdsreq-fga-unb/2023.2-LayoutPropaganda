import { Contacts, Prisma } from "@prisma/client";

export interface IContactsRepository {
  create(data: Prisma.ContactsUncheckedCreateInput): Promise<Contacts>;
}
