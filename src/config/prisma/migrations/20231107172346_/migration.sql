/*
  Warnings:

  - You are about to drop the column `highlight` on the `banners` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "banners" DROP COLUMN "highlight";

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "highlight" BOOLEAN DEFAULT false;
