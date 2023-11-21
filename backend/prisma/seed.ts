import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.employee.create({
    data: {
      first_name: "John",
      last_name: "Doe",
      email: "jhondoe@gmail.com",
      password: await hash("123456", 12),
      cpf: "12345678910",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
