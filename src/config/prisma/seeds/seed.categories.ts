import { db } from "@/connect";

export async function categories() {
  // Hotels
  // --- 01 CATEGORY ---
  await db.category.create({
    data: {
      id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
      reference: "hotels",
      title: "Econômico"
    }
  });

  // --- 02 CATEGORY ---
  await db.category.create({
    data: {
      id: "e8cb9e4b-0834-4fe6-b2e9-190aaab032dc",
      reference: "hotels",
      title: "Médio"
    }
  });

  // --- 03 CATEGORY ---
  await db.category.create({
    data: {
      id: "cdf7f01a-c018-4692-bfc8-1dfc92c69e54",
      reference: "hotels",
      title: "Superior"
    }
  });

  // --- 04 CATEGORY ---
  await db.category.create({
    data: {
      id: "a04da9e2-4cd5-437b-95ba-25d1ca70b8f0",
      reference: "hotels",
      title: "Luxo"
    }
  });

  // --- 05 CATEGORY ---
  await db.category.create({
    data: {
      id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
      reference: "hotels",
      title: "Boutique"
    }
  });

  // --- 06 CATEGORY ---
  await db.category.create({
    data: {
      id: "cf4e4882-e736-478e-abfc-9f20294287f8",
      reference: "hotels",
      title: "Resort"
    }
  });

  // --- 07 CATEGORY ---
  await db.category.create({
    data: {
      id: "c0cf9ecf-b2e5-4ee7-94e3-663437a57072",
      reference: "hotels",
      title: "Pousada"
    }
  });

  // --- 08 CATEGORY ---
  await db.category.create({
    data: {
      id: "a807e800-ea57-42a0-bbc8-9a9eb96c43c5",
      reference: "hotels",
      title: "Business"
    }
  });

  // --- 09 CATEGORY ---
  await db.category.create({
    data: {
      id: "4d33c6e5-e7aa-43cf-8925-b91e8e67350e",
      reference: "hotels",
      title: "Família"
    }
  });

  // --- 10 CATEGORY ---
  await db.category.create({
    data: {
      id: "2f4e23bd-d070-4c2f-b868-657c055428e4",
      reference: "hotels",
      title: "Pet-friendly"
    }
  });

  // --- 11 CATEGORY ---
  await db.category.create({
    data: {
      id: "42b7c9c6-88ed-462f-a2a0-5ce98a668aff",
      reference: "hotels",
      title: "Econômico"
    }
  });

  // --- 12 CATEGORY ---
  await db.category.create({
    data: {
      id: "e48a0242-578b-4de6-8c4a-67d3e5fb1cb2",
      reference: "hotels",
      title: "Médio"
    }
  });

  // --- 13 CATEGORY ---
  await db.category.create({
    data: {
      id: "a7160829-a57a-4f0e-8706-108ad0eebadf",
      reference: "hotels",
      title: "Alto padrão"
    }
  });

  // --- 14 CATEGORY ---
  await db.category.create({
    data: {
      id: "656240f1-a9fd-4a9c-9a40-012eef41f031",
      reference: "hotels",
      title: "Centro"
    }
  });

  // --- 15 CATEGORY ---
  await db.category.create({
    data: {
      id: "71e61298-735f-4416-a3f1-bc8999bd3766",
      reference: "hotels",
      title: "À beira-mar"
    }
  });

  // --- 16 CATEGORY ---
  await db.category.create({
    data: {
      id: "60281b89-31d3-4b5e-a12b-00f46dd314fa",
      reference: "hotels",
      title: "Próximo ao evento"
    }
  });

  // Rooms
  // --- 01 CATEGORY ---
  await db.category.create({
    data: {
      id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
      reference: "rooms",
      title: "Classic"
    }
  });

  // --- 02 CATEGORY ---
  await db.category.create({
    data: {
      id: "acbb0d0e-378d-4d4a-b382-14b834046564",
      reference: "rooms",
      title: "Luxo"
    }
  });

  // --- 03 CATEGORY ---
  await db.category.create({
    data: {
      id: "fdf6340a-ce52-4a18-b94f-b8d21ecc5035",
      reference: "rooms",
      title: "Premium"
    }
  });

  // --- 04 CATEGORY ---
  await db.category.create({
    data: {
      id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
      reference: "rooms",
      title: "Suíte executiva"
    }
  });

  // --- 05 CATEGORY ---
  await db.category.create({
    data: {
      id: "e0a7768b-c25b-407a-a2af-692f4b2bf8fc",
      reference: "rooms",
      title: "Suíte master"
    }
  });

  // --- 06 CATEGORY ---
  await db.category.create({
    data: {
      id: "5253e517-b6b3-4efd-a135-9fb2af4d7b6e",
      reference: "rooms",
      title: "Superior"
    }
  });

  // --- 07 CATEGORY ---
  await db.category.create({
    data: {
      id: "386428c8-5d84-4b80-9294-57f82f549407",
      reference: "rooms",
      title: "Standard"
    }
  });

  // --- 08 CATEGORY ---
  await db.category.create({
    data: {
      id: "3b6b9ad1-76c9-4f29-b613-eaedee440654",
      reference: "rooms",
      title: "Presidencial"
    }
  });

  // --- 09 CATEGORY ---
  await db.category.create({
    data: {
      id: "44f72027-3852-4fa3-9f08-0e006475ba52",
      reference: "rooms",
      title: "Single"
    }
  });

  // --- 10 CATEGORY ---
  await db.category.create({
    data: {
      id: "0b65819d-2986-4104-b81f-15c4ab350a04",
      reference: "rooms",
      title: "Duplo"
    }
  });

  // --- 11 CATEGORY ---
  await db.category.create({
    data: {
      id: "af93d09a-a885-4ebb-848f-bc557bd3363b",
      reference: "rooms",
      title: "Triplo"
    }
  });

  // --- 12 CATEGORY ---
  await db.category.create({
    data: {
      id: "497ead7a-24ba-4ee3-b129-cfb82a6887c3",
      reference: "rooms",
      title: "Quadruplo"
    }
  });

  // --- 13 CATEGORY ---
  await db.category.create({
    data: {
      id: "7cfd9252-73d4-4ae4-a0b7-a6aae9d4dfd4",
      reference: "rooms",
      title: "Casal"
    }
  });

  // --- 14 CATEGORY ---
  await db.category.create({
    data: {
      id: "eaf1535e-36f5-4839-a8a4-0ee8a7ad65cb",
      reference: "rooms",
      title: "Solteiro"
    }
  });

  // --- 15 CATEGORY ---
  await db.category.create({
    data: {
      id: "e972738b-e290-4fcc-acfa-df255ff38f55",
      reference: "rooms",
      title: "Cama extra"
    }
  });

  // --- 16 CATEGORY ---
  await db.category.create({
    data: {
      id: "eeecf60e-9c8c-48e1-8ca5-0844c43d5f3d ",
      reference: "rooms",
      title: "Cama casal"
    }
  });

  // Events
  // --- 01 CATEGORY ---
  await db.category.create({
    data: {
      id: "718fe418-a24a-45aa-9d43-dfeee81f09ca",
      reference: "events",
      title: "Corporativo"
    }
  });

  // --- 02 CATEGORY ---
  await db.category.create({
    data: {
      id: "32d35f58-4caa-4150-988b-160db53b8ff5",
      reference: "events",
      title: "Feira"
    }
  });

  // --- 03 CATEGORY ---
  await db.category.create({
    data: {
      id: "ef276bf3-5389-459a-a857-3261f0d2c476",
      reference: "events",
      title: "Rodada de Negócio"
    }
  });

  // --- 04 CATEGORY ---
  await db.category.create({
    data: {
      id: "d617ce4e-9ab7-44ec-9578-e4660c757cd7",
      reference: "events",
      title: "Congresso"
    }
  });

  // --- 05 CATEGORY ---
  await db.category.create({
    data: {
      id: "b767948d-5d9b-4ce7-bb8e-10efc178bbb7",
      reference: "events",
      title: "Jornada"
    }
  });

  // --- 06 CATEGORY ---
  await db.category.create({
    data: {
      id: "2eab8889-84ef-4c9e-a316-78a6631979cc",
      reference: "events",
      title: "Seminário"
    }
  });

  // --- 07 CATEGORY ---
  await db.category.create({
    data: {
      id: "be3b48be-7426-4e4f-941e-8248e07c2b33",
      reference: "events",
      title: "Simpósio"
    }
  });

  // --- 08 CATEGORY ---
  await db.category.create({
    data: {
      id: "6488487c-871d-4aeb-8c96-57771b0296e9",
      reference: "events",
      title: "Conferência"
    }
  });

  // --- 09 CATEGORY ---
  await db.category.create({
    data: {
      id: "94cc8f55-8be7-4ddf-818e-0a23ad55c835",
      reference: "events",
      title: "Debate"
    }
  });

  // --- 10 CATEGORY ---
  await db.category.create({
    data: {
      id: "acf297cb-82d1-4aa1-843a-19cec86cdd56",
      reference: "events",
      title: "Painel"
    }
  });

  // --- 11 CATEGORY ---
  await db.category.create({
    data: {
      id: "23064889-5e69-49ad-8ed4-63c91c2aa438",
      reference: "events",
      title: "Convenção"
    }
  });

  // --- 12 CATEGORY ---
  await db.category.create({
    data: {
      id: "a15f5909-6105-48ff-9db3-818fe58d09a1",
      reference: "events",
      title: "Encontro"
    }
  });

  // --- 13 CATEGORY ---
  await db.category.create({
    data: {
      id: "a1fa2947-d812-4dbe-a20c-04f239f652fe",
      reference: "events",
      title: "Workshop"
    }
  });

  // --- 14 CATEGORY ---
  await db.category.create({
    data: {
      id: "a0719c6b-b423-4815-b1ba-eb9e1d3df96d",
      reference: "events",
      title: "Curso"
    }
  });

  // --- 15 CATEGORY ---
  await db.category.create({
    data: {
      id: "547a6252-3412-41a6-b0d9-45e885fbb851",
      reference: "events",
      title: "Palestra"
    }
  });

  // --- 16 CATEGORY ---
  await db.category.create({
    data: {
      id: "7c1f23ec-def6-43ad-93c0-054d6c9b8faf",
      reference: "events",
      title: "Confraternização"
    }
  });

  // --- 17 CATEGORY ---
  await db.category.create({
    data: {
      id: "efa26fe5-6b22-45f2-9bd3-13b8120a9a45",
      reference: "events",
      title: "Esportivo"
    }
  });

  // --- 18 CATEGORY ---
  await db.category.create({
    data: {
      id: "a3d8a61e-e3bc-427e-bba7-5e6b0d5f7e6f",
      reference: "events",
      title: "Corrida"
    }
  });

  // --- 19 CATEGORY ---
  await db.category.create({
    data: {
      id: "d12b1924-8d3d-4db8-8135-1ba92000007e",
      reference: "events",
      title: "Festival"
    }
  });

  // --- 20 CATEGORY ---
  await db.category.create({
    data: {
      id: "6c01f3c8-a50d-41e9-b9f6-3e4f4b3b6fe1",
      reference: "events",
      title: "Show"
    }
  });

  // --- 21 CATEGORY ---
  await db.category.create({
    data: {
      id: "c0e55e36-5b80-49e7-bc31-b82d36cbbec1",
      reference: "events",
      title: "Outros"
    }
  });
}
