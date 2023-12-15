-- AlterTable
ALTER TABLE "hotels" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "rooms" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "availableQuantity" DROP NOT NULL;
