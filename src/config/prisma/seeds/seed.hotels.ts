import { db } from "@/connect";

export async function hotels() {
  // --- 01 HOTEL ---
  await db.hotel.create({
    data: {
      id: "18af6ce0-76df-4a87-b706-b01aa205b8e7",
      name: "Hotel Presidente",
      slug: "hotel-presidente-18af6ce0",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um luxuoso resort à beira-mar, perfeito para férias relaxantes.",
      status: "available",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "18af6ce0-76df-4a87-b706-b01aa205b8e7",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          thumbUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "18af6ce0-76df-4a87-b706-b01aa205b8e7",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Rogério Gomes",
          email: "gomess@gmail.com",
          phoneNumber: "9966885123",
          note: "Proprietário do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "18af6ce0-76df-4a87-b706-b01aa205b8e7"
        }
      },
      postalCode: "11724-110",
      street: "Main Street",
      neighbourhood: "Bairro da Liberdade",
      city: "São Paulo",
      state: "SP",
      latitude: -23.61641157518768,
      longitude: -46.66084793782244
    }
  });

  // --- 02 HOTEL ---
  await db.hotel.create({
    data: {
      id: "a16425a2-a2c0-44e4-a986-0762e9334119",
      name: "Hotel Estrela Dourada",
      slug: "hotel-estrela-dourada-a16425a2",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um retiro luxuoso à beira-mar, onde o conforto encontra a tranquilidade.",
      status: "available",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "a16425a2-a2c0-44e4-a986-0762e9334119",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          thumbUrl:
            "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "a16425a2-a2c0-44e4-a986-0762e9334119",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Ana Gomes",
          email: "anasss@gmail.com",
          phoneNumber: "9966885123",
          note: "Gerente do Hotel"
        },
        {
          name: "Pedro Silva",
          email: "pedrocca@gmail.com",
          phoneNumber: "9966775321",
          note: "Proprietário do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "a16425a2-a2c0-44e4-a986-0762e9334119"
        }
      },
      postalCode: "11724-110",
      street: "Main Street",
      neighbourhood: "Downtown",
      city: "São Paulo",
      state: "SP",
      latitude: -23.615094311719073,
      longitude: -46.655687367793114
    }
  });

  // --- 03 HOTEL ---
  await db.hotel.create({
    data: {
      id: "7b896324-9662-4a49-ada4-f1faf9762ea1",
      name: "Hotel Oásis Tropical",
      slug: "hotel-oásis-tropical-7b896324",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um retiro luxuoso à beira-mar, onde o conforto encontra a tranquilidade.",
      status: "unavailable",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "7b896324-9662-4a49-ada4-f1faf9762ea1",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
          thumbUrl:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "7b896324-9662-4a49-ada4-f1faf9762ea1",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Amanda Alves",
          email: "anasss@gmail.com",
          phoneNumber: "9966885123",
          note: "Proprietária do Hotel"
        },
        {
          name: "Pedro Chagas",
          email: "pedrocca@gmail.com",
          phoneNumber: "9966775321",
          note: "Gerente do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "7b896324-9662-4a49-ada4-f1faf9762ea1"
        }
      },
      postalCode: "11724-110",
      street: "Main Street",
      neighbourhood: "Downtown",
      city: "Curitiba",
      state: "PR",
      latitude: -25.452322169466726,
      longitude: -49.2553733343545
    }
  });

  // --- 04 HOTEL ---
  await db.hotel.create({
    data: {
      id: "47597d5a-0357-4474-8e84-8d10a9c6e6a1",
      name: "Hotel Encanto das Aves",
      slug: "hotel-encanto-das-aves-47597d5a",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um refúgio rústico nas montanhas, onde a tranquilidade encontra a natureza.",
      status: "available",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "47597d5a-0357-4474-8e84-8d10a9c6e6a1",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          thumbUrl:
            "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "47597d5a-0357-4474-8e84-8d10a9c6e6a1",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Jefferson Alves",
          email: "anasss@gmail.com",
          phoneNumber: "9966885123",
          note: "Proprietário do Hotel"
        },
        {
          name: "Pedro Chagas",
          email: "pedrocca@gmail.com",
          phoneNumber: "9966775321",
          note: "Gerente do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "47597d5a-0357-4474-8e84-8d10a9c6e6a1"
        }
      },
      postalCode: "11724-110",
      street: "Main Street",
      neighbourhood: "Downtown",
      city: "Curitiba",
      state: "PR",
      latitude: -25.45506137896666,
      longitude: -49.2508588266986
    }
  });

  // --- 05 HOTEL ---
  await db.hotel.create({
    data: {
      id: "1de05242-fe26-4f6e-82c2-29170ddcad78",
      name: "Hotel Encanto das Montanhas",
      slug: "hotel-encanto-das-montanhas-1de05242",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um refúgio rústico nas montanhas, onde a tranquilidade encontra a natureza.",
      status: "available",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "1de05242-fe26-4f6e-82c2-29170ddcad78",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          thumbUrl:
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "1de05242-fe26-4f6e-82c2-29170ddcad78",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Pedro Chagas",
          email: "pedrocca@gmail.com",
          phoneNumber: "9966775321",
          note: "Gerente do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "1de05242-fe26-4f6e-82c2-29170ddcad78"
        }
      },
      postalCode: "11724-110",
      street: "Mountain View Road",
      neighbourhood: "Mountain Village",
      city: "Gramado",
      state: "RS",
      latitude: -29.381089212952393,
      longitude: -50.87531371769719
    }
  });

  // --- 06 HOTEL ---
  await db.hotel.create({
    data: {
      id: "4f875924-0e18-4b7a-8b4a-891d6a1856f2",
      name: "Hotel Aconchego das Colinas",
      slug: "hotel-aconchego-das-colinas-4f875924",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um refúgio rústico nas colinas, onde a natureza encontra o conforto.",
      status: "available",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "4f875924-0e18-4b7a-8b4a-891d6a1856f2",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          thumbUrl:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          normalUrl:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          preloadUrl:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "4f875924-0e18-4b7a-8b4a-891d6a1856f2",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Lucas Souza",
          email: "sousouza@gmail.com",
          phoneNumber: "9966995321",
          note: "Gerente do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "4f875924-0e18-4b7a-8b4a-891d6a1856f2"
        }
      },
      postalCode: "11724-110",
      street: "Hillside Road",
      neighbourhood: "Mountain Haven",
      city: "Canela",
      state: "RS",
      latitude: -29.356300913090426,
      longitude: -50.806953786004364
    }
  });

  // --- 07 HOTEL ---
  await db.hotel.create({
    data: {
      id: "b07d458a-e44f-4c8d-b8c3-4f8c00d7c2f3",
      name: "Resort Encanto das Águas",
      slug: "resort-encanto-das-águas-b07d458a",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um resort cercado por águas cristalinas, onde o relaxamento é garantido.",
      status: "unavailable",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "b07d458a-e44f-4c8d-b8c3-4f8c00d7c2f3",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          thumbUrl:
            "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "b07d458a-e44f-4c8d-b8c3-4f8c00d7c2f3",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Bianca Souza",
          email: "baicasouza@outlook.com",
          phoneNumber: "9966995321",
          note: "Proprietária do Hotel"
        },
        {
          name: "Lucas Souza",
          email: "sousouza@outlook.com",
          phoneNumber: "9966995321",
          note: "Gerente do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "b07d458a-e44f-4c8d-b8c3-4f8c00d7c2f3"
        }
      },
      postalCode: "11724-110",
      street: "Crystal Lake Drive",
      neighbourhood: "Waterfront Oasis",
      city: "Bonito",
      state: "MS",
      latitude: -21.123493219683056,
      longitude: -56.4916508988794
    }
  });

  // --- 08 HOTEL ---
  await db.hotel.create({
    data: {
      id: "67f34af7-4a3f-456f-814a-da30036c268f",
      name: "Resort Encanto",
      slug: "resort-encanto-67f34af7",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um resort cercado por águas cristalinas, onde o relaxamento é garantido.",
      status: "unavailable",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "67f34af7-4a3f-456f-814a-da30036c268f",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          thumbUrl:
            "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "67f34af7-4a3f-456f-814a-da30036c268f",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Bianca Souza",
          email: "baicasouza@outlook.com",
          phoneNumber: "9966995321",
          note: "Proprietária do Hotel"
        },
        {
          name: "Lucas Souza",
          email: "sousouza@outlook.com",
          phoneNumber: "9966995321",
          note: "Gerente do Hotel"
        },
        {
          name: "Luiza Sena",
          email: "luizassena@gmail.com",
          phoneNumber: "9966775321",
          note: "Recepcionista do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "67f34af7-4a3f-456f-814a-da30036c268f"
        }
      },
      postalCode: "11724-110",
      street: "Crystal Lake Drive",
      neighbourhood: "Waterfront Oasis",
      city: "Bonito",
      state: "MS",
      latitude: -21.120633606955458,
      longitude: -56.498190789361715
    }
  });

  // --- 09 HOTEL ---
  await db.hotel.create({
    data: {
      id: "ce8b5b59-04d1-4f0d-bb5a-2b7838be9aae",
      name: "Hotel Charme Urbano",
      slug: "hotel-charme-urbano-ce8b5b59",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um hotel charmoso no coração da cidade, onde o estilo se encontra com a cultura.",
      status: "available",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "ce8b5b59-04d1-4f0d-bb5a-2b7838be9aae",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          thumbUrl:
            "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          normalUrl:
            "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          preloadUrl:
            "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "ce8b5b59-04d1-4f0d-bb5a-2b7838be9aae",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Lucas Souza",
          email: "sousouza@outlook.com",
          phoneNumber: "9966995321",
          note: "Gerente do Hotel"
        },
        {
          name: "Luiza Sena",
          email: "luizassena@gmail.com",
          phoneNumber: "9966775321",
          note: "Recepcionista do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "ce8b5b59-04d1-4f0d-bb5a-2b7838be9aae"
        }
      },
      postalCode: "11724-110",
      street: "Downtown Avenue",
      neighbourhood: "City Center",
      city: "São Paulo",
      state: "SP",
      latitude: -23.63964819058335,
      longitude: -46.66142405542529
    }
  });

  // --- 10 HOTEL ---
  await db.hotel.create({
    data: {
      id: "80c5723d-c18f-4286-8ad7-0be21a6b70b3",
      name: "Hotel Governador",
      slug: "hotel-governador-80c5723d",
      starRating: 4,
      categories: [
        {
          id: "240e68ba-c06c-4667-98b1-53bae1182fa0",
          title: "Econômico",
          reference: "hotels"
        },
        {
          id: "76f74193-67e3-413e-ba25-5aa6c20d3fe1",
          title: "Boutique",
          reference: "hotels"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        },
        {
          id: "505b0778-3e7f-4515-9454-94a76dda7489",
          icon: "ForkKnife",
          title: "Mesa de jantar",
          description:
            "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
        }
      ],
      description:
        "Um hotel charmoso no coração da cidade, onde o estilo se encontra com a cultura.",
      status: "unavailable",
      images: [
        {
          id: "396cb040-4980-4f0f-a214-10755dc94150",
          referenceId: "80c5723d-c18f-4286-8ad7-0be21a6b70b3",
          tableReference: "hotels",
          fileType: "image/webp",
          miniUrl:
            "https://images.unsplash.com/photo-1587213811864-46e59f6873b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          thumbUrl:
            "https://images.unsplash.com/photo-1587213811864-46e59f6873b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          normalUrl:
            "https://images.unsplash.com/photo-1587213811864-46e59f6873b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          preloadUrl:
            "https://images.unsplash.com/photo-1587213811864-46e59f6873b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
      ]
    }
  });

  await db.hotelInternalInformation.create({
    data: {
      hotelId: "80c5723d-c18f-4286-8ad7-0be21a6b70b3",
      hotelPolicies:
        "Cancelamentos feitos com menos de 24 horas de antecedência estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.",
      breakfastTax: 8.99,
      issTax: 25.0,
      serviceTax: 39.99,
      contacts: [
        {
          name: "Bianca Souza",
          email: "baicasouza@outlook.com",
          phoneNumber: "9966995321",
          note: "Proprietária do Hotel"
        },
        {
          name: "Luiza Sena",
          email: "luizassena@gmail.com",
          phoneNumber: "9966775321",
          note: "Recepcionista do Hotel"
        }
      ]
    }
  });

  await db.address.create({
    data: {
      hotel: {
        connect: {
          id: "80c5723d-c18f-4286-8ad7-0be21a6b70b3"
        }
      },
      postalCode: "11724-110",
      street: "Downtown Avenue",
      neighbourhood: "City Center",
      city: "Rio de Janeiro",
      state: "RJ",
      latitude: -22.895939898423826,
      longitude: -43.21908086170535
    }
  });
}
