-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'promoter', 'admin');

-- CreateEnum
CREATE TYPE "HotelStatus" AS ENUM ('available', 'unavailable');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImage" TEXT,
    "role" "Role" NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotels" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "starRating" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "categories" JSONB[],
    "commodities" JSONB[],
    "images" JSONB[],
    "status" "HotelStatus" NOT NULL DEFAULT 'available',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel_internal_informations" (
    "id" TEXT NOT NULL,
    "hotelId" TEXT NOT NULL,
    "hotelPolicies" TEXT NOT NULL,
    "breakfastTax" DOUBLE PRECISION NOT NULL,
    "issTax" DOUBLE PRECISION NOT NULL,
    "serviceTax" DOUBLE PRECISION NOT NULL,
    "contacts" JSONB[],

    CONSTRAINT "hotel_internal_informations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel_addresses" (
    "id" TEXT NOT NULL,
    "hotelId" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "number" TEXT,
    "street" TEXT NOT NULL,
    "complement" TEXT,
    "neighbourhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "hotel_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commodities" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "commodities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" TEXT NOT NULL,
    "hotelId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "maxGuest" INTEGER NOT NULL,
    "beds" INTEGER NOT NULL,
    "minRoomNightPrice" DOUBLE PRECISION,
    "description" TEXT NOT NULL,
    "availableQuantity" INTEGER NOT NULL,
    "categories" JSONB[],
    "commodities" JSONB[],
    "images" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_internal_informations_hotelId_key" ON "hotel_internal_informations"("hotelId");

-- CreateIndex
CREATE INDEX "hotel_internal_informations_hotelId_idx" ON "hotel_internal_informations"("hotelId");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_addresses_hotelId_key" ON "hotel_addresses"("hotelId");

-- CreateIndex
CREATE INDEX "hotel_addresses_hotelId_idx" ON "hotel_addresses"("hotelId");

-- CreateIndex
CREATE INDEX "rooms_hotelId_idx" ON "rooms"("hotelId");

-- AddForeignKey
ALTER TABLE "hotel_internal_informations" ADD CONSTRAINT "hotel_internal_informations_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotel_addresses" ADD CONSTRAINT "hotel_addresses_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE CASCADE ON UPDATE CASCADE;
