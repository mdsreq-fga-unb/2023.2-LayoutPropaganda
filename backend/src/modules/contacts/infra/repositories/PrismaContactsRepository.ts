import { Contacts, Prisma, PrismaClient } from "@prisma/client";
import { IContactsRepository } from "../../repositories/IContactsRepository";

export class PrismaContactsRepository implements IContactsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: Prisma.ContactsUncheckedCreateInput): Promise<Contacts> {
    const contact = await this.prisma.contacts.create({ data });

    return contact;
  }

  async listAll(): Promise<Contacts[]> {
    const contacts = await this.prisma.contacts.findMany();

    return contacts;
  }
}
