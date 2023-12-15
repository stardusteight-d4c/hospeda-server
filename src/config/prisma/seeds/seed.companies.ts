import { db } from "@/connect";

export async function companies() {
  // --- 01 COMPANY ---
  await db.company.create({
    data: {
      id: "afdecea3-f7b6-4a5a-a49b-c1688a3105ec",
      name: "Google Brasil Internet LTDA",
      cnpj: "06.990.590/0001-23",
      email: "google@gmail.com",
      phoneNumber: "13 988553691",
      segment: "Tecnologia",
      collaborators: {
        connect: {
          id: "ebf13086-2913-4086-a4f6-a5a7030296e4"
        }
      }
    }
  });

  await db.address.create({
    data: {
      company: {
        connect: {
          id: "afdecea3-f7b6-4a5a-a49b-c1688a3105ec"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Allianz Parque",
      neighbourhood: "Praia Azul",
      city: "São Paulo",
      state: "SP",
      latitude: -23.485543569831385,
      longitude: -46.70187564449322
    }
  });

  // --- 02 COMPANY ---
  await db.company.create({
    data: {
      id: "876b5b95-7980-45d1-8328-5031800f302a",
      name: "Nintendo",
      cnpj: "66.681.974/0001-96",
      email: "nintendo@gmail.com",
      phoneNumber: "13 988553691",
      segment: "Hotelaria e Viagens",
      collaborators: {
        connect: {
          id: "dac93ebe-6fc4-4cab-a70c-9272d356aea7"
        }
      }
    }
  });

  await db.address.create({
    data: {
      company: {
        connect: {
          id: "876b5b95-7980-45d1-8328-5031800f302a"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Allianz Parque",
      neighbourhood: "Praia Azul",
      city: "São Paulo",
      state: "SP",
      latitude: -23.485543569831385,
      longitude: -46.70187564449322
    }
  });

  // --- 03 COMPANY ---
  await db.company.create({
    data: {
      id: "cb2cb3ec-cdfa-4687-8ad7-ab210da66fca",
      name: "Hospeda Eventos",
      cnpj: "37.340.764/0001-36",
      email: "hospeda@gmail.com",
      phoneNumber: "13 988553691",
      segment: "Eletrônicos",
      collaborators: {
        connect: {
          id: "597c7539-cf15-483b-b75c-067023f2ce61"
        }
      }
    }
  });

  await db.address.create({
    data: {
      company: {
        connect: {
          id: "cb2cb3ec-cdfa-4687-8ad7-ab210da66fca"
        }
      },
      postalCode: "80215-182",
      number: "1430",
      street: "R. Imac. Conceição",
      neighbourhood: "Rebouças",
      city: "Curitiba",
      state: "PR",
      latitude: -23.485543569831385,
      longitude: -46.70187564449322
    }
  });
}
