/*
  Warnings:

  - You are about to drop the column `availableQuantity` on the `rooms` table. All the data in the column will be lost.
  - You are about to drop the column `negotiatedValue` on the `rooms` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_companyId_fkey";

-- AlterTable
ALTER TABLE "rooms" DROP COLUMN "availableQuantity",
DROP COLUMN "negotiatedValue";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
