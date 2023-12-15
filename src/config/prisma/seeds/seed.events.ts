import { db } from "@/connect";

const startDate = new Date();
startDate.setDate(startDate.getDate() + 10);
const endDate = new Date();
endDate.setDate(endDate.getDate() + 20);

export async function events() {
  // --- 01 EVENT ---
  await db.event.create({
    data: {
      id: "0d71b16b-3fe5-4314-bef7-04eb052758cf",
      companyId: "afdecea3-f7b6-4a5a-a49b-c1688a3105ec",
      name: "Nintendo Direct",
      slug: "nintendo-direct-0d71b16b",
      description:
        "Prepare-se para uma experiência emocionante e repleta de surpresas com o próximo Nintendo Direct! Junte-se a nós em uma jornada inesquecível enquanto exploramos o futuro brilhante dos jogos da Nintendo.",
      privacy: "public",
      type: "Feira",
      estimatedAudience: 800,
      accommodations: 500,
      bookings: 63,
      status: "approved",
      tags: ["#games", "#pokemon", "#nintendo"],
      dateTime: {
        startDate,
        endDate,
        startTime: "08:00",
        endTime: "22:00"
      },
      highlight: false,
      officialHotels: ["18af6ce0-76df-4a87-b706-b01aa205b8e7"],
      hotels: ["18af6ce0-76df-4a87-b706-b01aa205b8e7"],
      banner: {
        id: "c780cf3e-872a-422d-9189-e5d183b48aca",
        referenceId: "0d71b16b-3fe5-4314-bef7-04eb052758cf",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "0d71b16b-3fe5-4314-bef7-04eb052758cf"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Andar 5, Suíte 501",
      neighbourhood: "Praia Azul",
      city: "Cidade Maravilhosa",
      state: "SP",
      latitude: -23.595962031460022,
      longitude: -46.71675852617256
    }
  });

  // --- 02 EVENT ---
  await db.event.create({
    data: {
      id: "2153515f-174b-45ff-9f01-34862bdb04ac",
      companyId: "afdecea3-f7b6-4a5a-a49b-c1688a3105ec",
      name: "Lollapalooza",
      slug: "lollapalooza-2153515f",
      description:
        "Lollapalooza é um festival de música alternativa que acontece anualmente, é composto por gêneros como rock alternativo, heavy metal, punk rock, grunge e performances de comédia e danças, além de estandes de artesanato.",
      privacy: "public",
      type: "Festival",
      estimatedAudience: 200,
      status: "approved",
      accommodations: 30,
      bookings: 15,
      tags: ["#festival", "#rock", "#music"],
      dateTime: {
        startDate,
        endDate,
        startTime: "08:00",
        endTime: "22:00"
      },
      highlight: false,
      officialHotels: ["7b896324-9662-4a49-ada4-f1faf9762ea1"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "a16425a2-a2c0-44e4-a986-0762e9334119",
        "7b896324-9662-4a49-ada4-f1faf9762ea1"
      ],
      banner: {
        id: "be6b1c1a-fa73-456b-b617-d59f31c50e5d",
        referenceId: "2153515f-174b-45ff-9f01-34862bdb04ac",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "2153515f-174b-45ff-9f01-34862bdb04ac"
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

  // --- 03 EVENT ---
  await db.event.create({
    data: {
      id: "bcc8d37f-269c-44a9-951e-bc4fcf1f9a7c",
      companyId: "876b5b95-7980-45d1-8328-5031800f302a",
      name: "BlizzCon",
      slug: "blizzCon-bcc8d37f",
      description:
        "BlizzCon é a conveção anual realizada pela Blizzard Entertainment, para divulgar suas franquias:Warcraft, StarCraft, Diablo, Hearthstone e Overwatch.",
      privacy: "public",
      type: "Convenção",
      estimatedAudience: 1200,
      accommodations: 300,
      bookings: 258,
      status: "closed",
      tags: ["#BlizzCon", "#games"],
      dateTime: {
        startDate,
        endDate,
        startTime: "07:00",
        endTime: "00:00"
      },
      highlight: true,
      officialHotels: ["a16425a2-a2c0-44e4-a986-0762e9334119"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "a16425a2-a2c0-44e4-a986-0762e9334119",
        "7b896324-9662-4a49-ada4-f1faf9762ea1"
      ],
      banner: {
        id: "da80d355-f75a-46a5-9028-bea1ad846c1a",
        referenceId: "bcc8d37f-269c-44a9-951e-bc4fcf1f9a7c",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "bcc8d37f-269c-44a9-951e-bc4fcf1f9a7c"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Allianz Parque",
      neighbourhood: "Praia Azul",
      city: "São Paulo",
      state: "SP",
      latitude: -23.54950809500064,
      longitude: -46.5002290122333
    }
  });

  // --- 04 EVENT ---
  await db.event.create({
    data: {
      id: "92b28d54-60b8-45dd-b6e9-e67cc52100c1",
      companyId: "876b5b95-7980-45d1-8328-5031800f302a",
      name: "Comiket",
      slug: "comiket-92b28d54",
      description:
        "Comiket, também conhecido como Comic Market, é a maior feira de dōjinshi do mundo, que acontece duas vezes por ano em Tóquio, Japão. A primeira edição da Comiket aconteceu em 21 de Dezembro de 1975 e contou com a presença de 32 círculos participantes e cerca de 600 visitantes.",
      privacy: "private",
      type: "Convenção",
      estimatedAudience: 151,
      status: "approved",
      tags: ["#manga", "#games"],
      dateTime: {
        startDate,
        endDate,
        startTime: "12:00",
        endTime: "23:00"
      },
      highlight: false,
      officialHotels: ["a16425a2-a2c0-44e4-a986-0762e9334119"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "a16425a2-a2c0-44e4-a986-0762e9334119",
        "7b896324-9662-4a49-ada4-f1faf9762ea1"
      ],
      banner: {
        id: "d1237f6c-4fec-4442-a8a5-ea92f8e56877",
        referenceId: "92b28d54-60b8-45dd-b6e9-e67cc52100c1",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1531501410720-c8d437636169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1531501410720-c8d437636169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1531501410720-c8d437636169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1531501410720-c8d437636169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "92b28d54-60b8-45dd-b6e9-e67cc52100c1"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Expoville",
      neighbourhood: "Praia Azul",
      city: "Joinville",
      state: "SC",
      latitude: -26.294672400135312,
      longitude: -48.85995398682326
    }
  });

  // --- 05 EVENT ---
  await db.event.create({
    data: {
      id: "8f98d5c3-955e-4ab6-a6d5-9d3896d9b576",
      companyId: "876b5b95-7980-45d1-8328-5031800f302a",
      name: "Rock in Rio",
      slug: "rock-in-rio-8f98d5c3",
      description:
        "O Rock in Rio é um festival de música idealizado pelo empresário brasileiro Roberto Medina pela primeira vez em 1985. É reconhecido como um dos maiores festivais musicais do planeta. Foi originalmente organizado no Rio de Janeiro, de onde vem o nome.",
      privacy: "public",
      type: "Festival",
      estimatedAudience: 10200,
      status: "approved",
      tags: ["#music", "#rockinrio"],
      dateTime: {
        startDate,
        endDate,
        startTime: "07:00",
        endTime: "05:00"
      },
      highlight: false,
      officialHotels: ["7b896324-9662-4a49-ada4-f1faf9762ea1"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "a16425a2-a2c0-44e4-a986-0762e9334119",
        "7b896324-9662-4a49-ada4-f1faf9762ea1"
      ],
      banner: {
        id: "31c109c4-683f-4244-9c02-ac6313f18456",
        referenceId: "8f98d5c3-955e-4ab6-a6d5-9d3896d9b576",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "8f98d5c3-955e-4ab6-a6d5-9d3896d9b576"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Expoville",
      neighbourhood: "Praia Azul",
      city: "Rio de Janeiro",
      state: "RJ",
      latitude: -22.960665096618232,
      longitude: -43.20768709067536
    }
  });

  // --- 06 EVENT ---
  await db.event.create({
    data: {
      id: "2947a0b6-56cc-4d7a-abc5-dd87a9326154",
      companyId: "afdecea3-f7b6-4a5a-a49b-c1688a3105ec",
      name: "Hackathon Summit",
      slug: "hackathon-summit-2947a0b6",
      description:
        "O evento representa uma maratona de inovação de três dias, em que alunos, profissionais e a comunidade vão, em grupos, resolver problemas relacionados ao desenvolvimento das “Cidades Inteligentes”. Não existe pré-requisito de formação e de idade para participar no evento, mas buscamos formar equipes com conhecimentos interdisciplinares, destacando conhecimentos relacionados à gestão, marketing, programação e TI.",
      privacy: "public",
      type: "Encontro",
      estimatedAudience: 800,
      status: "pending",
      tags: ["#programming", "#code"],
      dateTime: {
        startDate,
        endDate,
        startTime: "07:00",
        endTime: "05:00"
      },
      highlight: false,
      officialHotels: ["7b896324-9662-4a49-ada4-f1faf9762ea1"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "a16425a2-a2c0-44e4-a986-0762e9334119",
        "7b896324-9662-4a49-ada4-f1faf9762ea1"
      ],
      banner: {
        id: "05b4420e-284c-4184-afbe-63d1a867059a",
        referenceId: "2947a0b6-56cc-4d7a-abc5-dd87a9326154",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "2947a0b6-56cc-4d7a-abc5-dd87a9326154"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Expoville",
      neighbourhood: "Praia Azul",
      city: "Curitiba",
      state: "PR",
      latitude: -25.451440601050805,
      longitude: -49.25287351571177
    }
  });

  // --- 07 EVENT ---
  await db.event.create({
    data: {
      id: "5175372a-3c51-440a-9b70-b52319243b3b",
      companyId: "afdecea3-f7b6-4a5a-a49b-c1688a3105ec",
      name: "Arctic Monkeys",
      slug: "arctic-monkeys-5175372a",
      description:
        "Arctic Monkeys é uma banda britânica de rock formada em 2002 nos subúrbios da cidade de Sheffield, na Inglaterra. O grupo é formado por Alex Turner, Matt Helders, Jamie Cook e Nick O'Malley.",
      privacy: "public",
      type: "Show",
      estimatedAudience: 800,
      status: "approved",
      tags: ["#music", "#show"],
      dateTime: {
        startDate,
        endDate,
        startTime: "07:00",
        endTime: "05:00"
      },
      highlight: true,
      officialHotels: ["1de05242-fe26-4f6e-82c2-29170ddcad78"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "1de05242-fe26-4f6e-82c2-29170ddcad78"
      ],
      banner: {
        id: "5392123e-6c39-4d11-8f0e-4b90363b1dec",
        referenceId: "5175372a-3c51-440a-9b70-b52319243b3b",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1619229665486-19f7ee2987a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1619229665486-19f7ee2987a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1619229665486-19f7ee2987a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1619229665486-19f7ee2987a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "5175372a-3c51-440a-9b70-b52319243b3b"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Expoville",
      neighbourhood: "Praia Azul",
      city: "São Paulo",
      state: "SP",
      latitude: -23.551650216487555,
      longitude: -46.61001493904189
    }
  });

  // --- 08 EVENT ---
  await db.event.create({
    data: {
      id: "b4d17ab3-18ad-41e4-b2c0-cf954615066e",
      companyId: "afdecea3-f7b6-4a5a-a49b-c1688a3105ec",
      name: "Johnny B. Goode tonight",
      slug: "johnny-b-goode-tonight-b4d17ab3",
      description: `Charles Edward Anderson Berry, mais conhecido como Chuck Berry, foi um cantor e compositor estadunidense, um dos pioneiros do gênero rock and roll. Com canções como "Maybellene", "Roll Over Beethoven", "Rock and Roll Music" e "Johnny B.`,
      privacy: "public",
      type: "Festival",
      estimatedAudience: 800,
      status: "approved",
      highlight: true,
      tags: ["#music", "#rockinroll"],
      dateTime: {
        startDate,
        endDate,
        startTime: "07:00",
        endTime: "05:00"
      },
      officialHotels: ["1de05242-fe26-4f6e-82c2-29170ddcad78"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "1de05242-fe26-4f6e-82c2-29170ddcad78"
      ],
      banner: {
        id: "2ca1ca0a-15be-49a1-8f35-9835194114e1",
        referenceId: "b4d17ab3-18ad-41e4-b2c0-cf954615066e",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1684262483043-c15def5288bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1Y2slMjBiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        thumbUrl:
          "https://images.unsplash.com/photo-1684262483043-c15def5288bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1Y2slMjBiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        normalUrl:
          "https://images.unsplash.com/photo-1684262483043-c15def5288bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1Y2slMjBiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        preloadUrl:
          "https://images.unsplash.com/photo-1684262483043-c15def5288bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1Y2slMjBiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "b4d17ab3-18ad-41e4-b2c0-cf954615066e"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Expoville",
      neighbourhood: "Praia Azul",
      city: "Fortaleza",
      state: "CE",
      latitude: -3.759870355681458,
      longitude: -38.535118336664965
    }
  });

  // --- 09 EVENT ---
  await db.event.create({
    data: {
      id: "9db88fc4-0a01-41ef-b5d1-aa7555efefa7",
      companyId: "afdecea3-f7b6-4a5a-a49b-c1688a3105ec",
      name: "SXSW",
      slug: "sxsw-9db88fc4",
      description: `O SXSW é um dos maiores e mais influentes festivais de música independente do mundo. Ele atrai músicos, bandas e artistas de todos os gêneros, proporcionando uma plataforma para exposição e networking.`,
      privacy: "public",
      type: "Festival",
      estimatedAudience: 14000,
      accommodations: 200,
      bookings: 155,
      status: "approved",
      tags: ["#music", "#festival"],
      dateTime: {
        startDate,
        endDate,
        startTime: "07:00",
        endTime: "05:00"
      },
      highlight: true,
      officialHotels: ["1de05242-fe26-4f6e-82c2-29170ddcad78"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "1de05242-fe26-4f6e-82c2-29170ddcad78"
      ],
      banner: {
        id: "7c395ff3-dafd-456a-b795-5e29e5fc086f",
        referenceId: "9db88fc4-0a01-41ef-b5d1-aa7555efefa7",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "9db88fc4-0a01-41ef-b5d1-aa7555efefa7"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Expoville",
      neighbourhood: "Praia Azul",
      city: "Fortaleza",
      state: "CE",
      latitude: -3.764364623926676,
      longitude: -38.52866344373052
    }
  });

  // --- 10 EVENT ---
  await db.event.create({
    data: {
      id: "d50fd2da-1179-431d-9af3-5c41412b1813",
      companyId: "876b5b95-7980-45d1-8328-5031800f302a",
      name: "GameBrawl",
      slug: "gamebrawl-d50fd2da",
      description: `Você está pronto para a batalha definitiva nos jogos? Prepare-se para a emoção, a competição acirrada e a diversão ininterrupta no Torneio de Games "MegaConquer 2023". Este evento imperdível é uma celebração do mundo dos jogos e um verdadeiro campo de provação para gamers de todos os níveis de habilidade.`,
      privacy: "private",
      type: "Encontro",
      estimatedAudience: 200,
      status: "pending",
      tags: ["#game", "#torneio"],
      dateTime: {
        startDate,
        endDate,
        startTime: "07:00",
        endTime: "05:00"
      },
      highlight: false,
      officialHotels: ["1de05242-fe26-4f6e-82c2-29170ddcad78"],
      hotels: [
        "18af6ce0-76df-4a87-b706-b01aa205b8e7",
        "1de05242-fe26-4f6e-82c2-29170ddcad78"
      ],
      banner: {
        id: "16a38057-a3a9-4a59-a46c-22c71c546b66",
        referenceId: "d50fd2da-1179-431d-9af3-5c41412b1813",
        tableReference: "events",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        thumbUrl:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        normalUrl:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        preloadUrl:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    }
  });

  await db.address.create({
    data: {
      event: {
        connect: {
          id: "d50fd2da-1179-431d-9af3-5c41412b1813"
        }
      },
      postalCode: "12345-678",
      number: "123",
      street: "Avenida das Palmeiras",
      complement: "Expoville",
      neighbourhood: "Praia Azul",
      city: "Joinville",
      state: "SC",
      latitude: -26.30823821937705,
      longitude: -48.854656037666686
    }
  });
}
