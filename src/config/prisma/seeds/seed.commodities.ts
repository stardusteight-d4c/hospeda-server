import { db } from "@/connect";

export async function commodities() {
  // --- 01 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
      icon: "EggCrack",
      title: "Café da manhã incluso",
      description:
        "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
    }
  });

  // --- 02 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
      icon: "Wheelchair",
      title: "Acessibilidade",
      description:
        "Garante que todos os hóspedes desfrutem de uma estadia confortável e conveniente."
    }
  });

  // --- 03 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "0fe3b371-a5f6-4546-a0d3-201c2535f22b",
      icon: "Prohibit",
      title: "Apto para não fumantes",
      description:
        "Um ambiente limpo e livre de fumaça para o conforto de todos os hóspedes."
    }
  });

  // --- 04 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "c221f63d-28cb-4062-a79a-30c4e530725a",
      icon: "Wind",
      title: "Ar condicionado",
      description:
        "Desfrute de um ambiente confortável e controlado durante a sua estadia."
    }
  });

  // --- 05 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "fbff789f-0816-4ecb-8460-01b4a37749ed",
      icon: "HandSoap",
      title: "Artigos para banheiro",
      description:
        "Itens como sabonetes, xampus, condicionadores, toalhas, roupões e muito mais."
    }
  });

  // --- 06 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "64fd72c9-a585-465e-aa70-b5c99b7d5c7e",
      icon: "Toilet",
      title: "Banheiro privado",
      description: "Valorize a sua privacidade e conforto."
    }
  });

  // --- 07 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "216c561b-5d6c-44c2-8231-68c8994aee84",
      icon: "Baby",
      title: "Berço",
      description:
        "Berços confortáveis e seguros mediante solicitação."
    }
  });

  // --- 08 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "394f9877-7572-442c-b026-3a7ceb772355",
      icon: "UserPlus",
      title: "Cama de solteiro",
      description:
        "Conforto e conveniência para viajantes individuais."
    }
  });

  // --- 09 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "fc098b0d-2af6-4e55-a4e2-6e146b72bed2",
      icon: "LockKey",
      title: "Cofre",
      description:
        "Cofres para que você possa armazenar com segurança seus objetos de valor."
    }
  });

  // --- 10 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "949e4aad-e1cc-40d4-a619-a86eadf1369f",
      icon: "Shower",
      title: "Ducha",
      description: "Relaxe e renove-se com uma ducha revigorante."
    }
  });

  // --- 11 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "ceb5fd45-46dc-44b0-bbcb-f915efb1d664",
      icon: "Car",
      title: "Estacionamento",
      description:
        "Área de estacionamento monitorada e segura, proporcionando tranquilidade enquanto você aproveita a sua estadia."
    }
  });

  // --- 12 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "e25a6e95-5f76-4350-b07e-310e8e7beaac",
      icon: "Snowflake",
      title: "Frigobar",
      description:
        "Mantenha bebidas e lanches favoritos sempre à mão."
    }
  });

  // --- 13 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "b2b488d9-299a-4b71-a917-af32d811a5a4",
      icon: "Fire",
      title: "Lareira",
      description:
        "Desfrute de uma atmosfera aconchegante e acolhedora."
    }
  });

  // --- 14 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "41db6be6-a13a-46a8-ba00-7c527e1cdef9",
      icon: "BeerBottle",
      title: "Minibar",
      description:
        "Para você que deseja relaxar com uma bebida refrescante ou satisfazer sua fome no meio da noite."
    }
  });

  // --- 15 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "2681c6ae-2b45-4ed2-be24-fa4d0df41755",
      icon: "Alarm",
      title: "Serviço de despertar",
      description:
        "Basta informar a que horas você gostaria de ser despertado, e a equipe do hotel cuidará para que você acorde pontualmente."
    }
  });

  // --- 16 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "312b9a88-7d23-4321-a927-8c62604c5947",
      icon: "CallBell",
      title: "Serviço de quarto",
      description:
        "Uma equipe está pronta para atender aos seus pedidos e fornecer refeições deliciosas e comodidades diretamente no conforto do seu quarto."
    }
  });

  // --- 17 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "780595d7-055e-4ac1-bda4-c443a9012883",
      icon: "Screencast",
      title: "Smart TV",
      description:
        "Relaxe e entretenha-se com a Smart TV em seu quarto."
    }
  });

  // --- 18 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "f480f28e-68e8-4ad5-9f9d-48ae9813265d",
      icon: "Phone",
      title: "Telefone",
      description:
        "Seja para fazer chamadas locais, solicitar serviços do hotel ou simplesmente estar acessível, o telefone está à sua disposição."
    }
  });

  // --- 19 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "26e35482-2cd6-4607-bd5b-07f090a0eb4f",
      icon: "TelevisionSimple",
      title: "Televisão",
      description:
        "Se você deseja assistir a programas, filmes ou notícias locais, nossa televisão está pronta para atender às suas preferências."
    }
  });

  // --- 20 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "fc57d6bf-4552-4de3-84be-0eff787098b3",
      icon: "WifiHigh",
      title: "Wi-Fi",
      description:
        "Mantenha-se conectado com uma rede Wi-Fi de alta velocidade durante a sua estadia."
    }
  });

  // --- 21 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "8d384366-6bbc-405b-96fb-7b5ae72818f4",
      icon: "Bathtub",
      title: "Banheira de hidromassagem",
      description:
        "Relaxe e mime-se com uma experiência de banho luxuosa em nossa banheira de hidromassagem."
    }
  });

  // --- 22 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "07b3061b-0a34-492d-8216-127312a1401d",
      icon: "SquareSplitHorizontal",
      title: "Cama box",
      description:
        "Com colchões de alta qualidade e roupas de cama macias, excepcional para uma noite de sono tranquila."
    }
  });

  // --- 23 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "5f969ffa-b752-481b-bb09-444aeaaaa394",
      icon: "Fan",
      title: "Secador de cabelo",
      description:
        "Você pode manter seu visual impecável e pronto para qualquer ocasião, sem se preocupar em trazer seu próprio secador."
    }
  });

  // --- 24 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "9f8ad0e9-fffe-4a1a-83b7-5465f16c82cb",
      icon: "Crown",
      title: "Cama King Size",
      description:
        "Camas king size oferecem amplo espaço para que você possa esticar e desfrutar de um sono reparador."
    }
  });

  // --- 25 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "74c8da67-5e3e-4f4e-979b-f1747c32b939",
      icon: "CrownSimple",
      title: "Cama Queen Size",
      description:
        "Camas queen size são projetadas para oferecer um equilíbrio perfeito entre espaço e aconchego."
    }
  });

  // --- 26 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "55a288c1-3b6a-4673-ba7b-83b578642d08",
      icon: "Bed",
      title: "Cama twin",
      description:
        "Camas twin oferecem um espaço pessoal amplo e colchões de alta qualidade para garantir uma noite de sono tranquila."
    }
  });

  // --- 27 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "6463e3fe-4500-4cc1-bf3a-10d96ee3dcd3",
      icon: "Users",
      title: "Cama de casal",
      description:
        "Desfrute de momentos especiais em nossa cama de casal durante a sua estadia."
    }
  });

  // --- 28 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "1d2b6d90-970c-487c-8122-31bd5e2b9db4",
      icon: "NotePencil",
      title: "Mesa de trabalho",
      description:
        "Mantenha-se produtivo durante a sua estadia com uma mesa de trabalho dedicada em seu quarto."
    }
  });

  // --- 29 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "e60d02a2-f0d9-4e6b-9c17-272b0c5d4977",
      icon: "PresentationChart",
      title: "Salas de reunião",
      description:
        "Este hotel facilita as suas reuniões de negócios e eventos especiais com nossas salas de reunião bem equipadas."
    }
  });

  // --- 30 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "d6358672-70ca-4035-a2b5-2ec69ff8bcd1",
      icon: "Hamburger",
      title: "Restaurante",
      description:
        "Desfrute de refeições deliciosas e convenientes durante a sua estadia."
    }
  });

  // --- 31 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "82e28364-d149-403b-a0f8-c678702cd680",
      icon: "DiceFive",
      title: "Piso frio em porcelanato",
      description:
        "Pisos de porcelanato que mantêm a temperatura agradável e também oferecem um visual moderno e sofisticado."
    }
  });

  // --- 32 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "95f6f411-f73d-4586-82c6-490dc9b61ccd",
      icon: "CookingPot",
      title: "Mini cozinha",
      description:
        "Mini cozinha equipada com tudo o que você precisa para preparar refeições simples ou lanches rápidos."
    }
  });

  // --- 33 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "318419eb-50e7-4c1c-96ff-204143319610",
      icon: "Waves",
      title: "Micro-ondas",
      description:
        "Micro-ondas à sua disposição para aquecer alimentos, preparar lanches rápidos ou simplesmente facilitar a sua vida."
    }
  });

  // --- 34 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "57b5ab31-d73d-42d0-86a8-f340aa1cf41d",
      icon: "Couch",
      title: "Sala de estar com sofá",
      description:
        "Um espaço acolhedor para que você possa ler um livro, assistir a filmes ou simplesmente descansar."
    }
  });

  // --- 35 COMMODITY ---
  await db.commodity.create({
    data: {
      id: "505b0778-3e7f-4515-9454-94a76dda7489",
      icon: "ForkKnife",
      title: "Mesa de jantar",
      description:
        "Uma mesa de jantar perfeita para compartilhar refeições em família, amigos ou colegas de trabalho."
    }
  });
}
