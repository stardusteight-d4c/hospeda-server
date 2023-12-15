/*
  Warnings:

  - Added the required column `position` to the `banners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "banners" ADD COLUMN     "position" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "rooms" ALTER COLUMN "status" SET DEFAULT 'available';
