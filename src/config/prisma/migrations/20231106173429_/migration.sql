/*
  Warnings:

  - You are about to alter the column `position` on the `banners` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- CreateEnum
CREATE TYPE "BannerStatus" AS ENUM ('active', 'inactive');

-- AlterTable
ALTER TABLE "banners" ADD COLUMN     "status" "BannerStatus" NOT NULL DEFAULT 'active',
ALTER COLUMN "position" DROP NOT NULL,
ALTER COLUMN "position" SET DATA TYPE INTEGER;
