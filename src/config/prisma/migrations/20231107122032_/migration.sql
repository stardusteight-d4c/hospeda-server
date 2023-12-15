/*
  Warnings:

  - You are about to drop the column `role` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `events` table. All the data in the column will be lost.
  - Added the required column `email` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `segment` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_ownerId_fkey";

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "role",
ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "segment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "events" DROP COLUMN "ownerId",
ADD COLUMN     "companyId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "companyId" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
