import { db } from "@/connect";

export async function users() {
  // --- 01 USER ---
  await db.user.create({
    data: {
      id: "ebf13086-2913-4086-a4f6-a5a7030296e4",
      email: "promoter1@test.com",
      name: "Darth Vader",
      password:
        "$2b$10$57deDqLiGjgEwfaPQuduyOjHf4TZzZtaSBvZWKJDakanCOrFSgcSy",
      phoneNumber: "+55 13 988553728",
      role: "promoter"
    }
  });

  // --- 02 USER ---
  await db.user.create({
    data: {
      id: "dac93ebe-6fc4-4cab-a70c-9272d356aea7",
      email: "promoter2@test.com",
      name: "Rocket Raccoon",
      password:
        "$2b$10$57deDqLiGjgEwfaPQuduyOjHf4TZzZtaSBvZWKJDakanCOrFSgcSy",
      phoneNumber: "+55 13 968553728",
      role: "promoter"
    }
  });

  // --- 03 USER ---
  await db.user.create({
    data: {
      id: "597c7539-cf15-483b-b75c-067023f2ce61",
      email: "hospeda@test.com",
      name: "Hospeda Eventos",
      password:
        "$2b$10$57deDqLiGjgEwfaPQuduyOjHf4TZzZtaSBvZWKJDakanCOrFSgcSy",
      phoneNumber: "+55 13 988553728",
      role: "admin"
    }
  });
}
