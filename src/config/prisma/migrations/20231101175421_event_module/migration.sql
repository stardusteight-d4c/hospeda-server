/*
  Warnings:

  - You are about to drop the `hotel_addresses` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `reference` on the `categories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CategoryReference" AS ENUM ('hotels', 'rooms', 'events');

-- CreateEnum
CREATE TYPE "EventPrivacy" AS ENUM ('public', 'private');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('pending', 'approved', 'rejected', 'closed');

-- CreateEnum
CREATE TYPE "RoomStatus" AS ENUM ('available', 'unavailable');

-- DropForeignKey
ALTER TABLE "hotel_addresses" DROP CONSTRAINT "hotel_addresses_hotelId_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "reference",
ADD COLUMN     "reference" "CategoryReference" NOT NULL;

-- AlterTable
ALTER TABLE "hotel_internal_informations" ALTER COLUMN "hotelPolicies" DROP NOT NULL,
ALTER COLUMN "breakfastTax" DROP NOT NULL,
ALTER COLUMN "issTax" DROP NOT NULL,
ALTER COLUMN "serviceTax" DROP NOT NULL;

-- AlterTable
ALTER TABLE "hotels" ADD COLUMN     "addressId" TEXT;

-- AlterTable
ALTER TABLE "rooms" ADD COLUMN     "negotiatedValue" INTEGER,
ADD COLUMN     "status" "RoomStatus" NOT NULL DEFAULT 'unavailable';

-- DropTable
DROP TABLE "hotel_addresses";

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "number" TEXT,
    "street" TEXT NOT NULL,
    "complement" TEXT,
    "neighbourhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "addressId" TEXT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "estimatedAudience" INTEGER NOT NULL,
    "description" TEXT,
    "banner" JSONB,
    "accommodations" INTEGER DEFAULT 0,
    "bookings" INTEGER DEFAULT 0,
    "tags" TEXT[],
    "officialHotels" TEXT[],
    "hotels" TEXT[],
    "dateTime" JSONB NOT NULL,
    "extras" JSONB,
    "privacy" "EventPrivacy" NOT NULL,
    "status" "EventStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_hotels" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "hotelId" TEXT NOT NULL,
    "startDateAllotment" TIMESTAMP(3) NOT NULL,
    "endDateAllotment" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_hotel_rooms" (
    "id" TEXT NOT NULL,
    "eventHotelId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "negotiatedValue" INTEGER NOT NULL,
    "availableQuantity" INTEGER NOT NULL,

    CONSTRAINT "event_hotel_rooms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "event_hotels_eventId_hotelId_key" ON "event_hotels"("eventId", "hotelId");

-- CreateIndex
CREATE UNIQUE INDEX "event_hotel_rooms_eventHotelId_roomId_key" ON "event_hotel_rooms"("eventHotelId", "roomId");

-- AddForeignKey
ALTER TABLE "hotels" ADD CONSTRAINT "hotels_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_hotels" ADD CONSTRAINT "event_hotels_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_hotels" ADD CONSTRAINT "event_hotels_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_hotel_rooms" ADD CONSTRAINT "event_hotel_rooms_eventHotelId_fkey" FOREIGN KEY ("eventHotelId") REFERENCES "event_hotels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_hotel_rooms" ADD CONSTRAINT "event_hotel_rooms_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
