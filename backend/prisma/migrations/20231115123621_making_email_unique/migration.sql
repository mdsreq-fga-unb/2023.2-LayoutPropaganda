/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");
