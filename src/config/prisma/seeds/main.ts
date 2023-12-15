import { db } from "@/connect";

import {
  hotels,
  commodities,
  categories,
  users,
  events,
  rooms,
  banners,
  companies
} from "@config/prisma/seeds";

async function clearDB() {
  await db.company.deleteMany();
  await db.hotel.deleteMany();
  await db.commodity.deleteMany();
  await db.category.deleteMany();
  await db.user.deleteMany();
  await db.banner.deleteMany();
  await db.event.deleteMany();
  await db.room.deleteMany();
}

async function main() {
  console.log("Cleaning database...");
  await clearDB();

  console.log("Seeding users...");
  await users();

  console.log("Seeding companies...");
  await companies();

  console.log("Seeding hotels...");
  await hotels();

  console.log("Seeding rooms...");
  await rooms();

  console.log("Seeding events...");
  await events();

  console.log("Seeding commodities...");
  await commodities();

  console.log("Seeding categories...");
  await categories();

  console.log("Seeding banners...");
  await banners();

  console.log("Seed done!");
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
