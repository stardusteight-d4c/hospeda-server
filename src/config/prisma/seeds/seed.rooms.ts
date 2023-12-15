import { db } from "@/connect";

export async function rooms() {
  // --- 01 HOTEL ROOMS (18af6ce0-76df-4a87-b706-b01aa205b8e7) ---
  await db.room.create({
    data: {
      id: "a431617a-bb6a-4390-8b0f-6702f1efd67f",
      hotelId: "18af6ce0-76df-4a87-b706-b01aa205b8e7",
      name: "Quarto com Vista para o Mar",
      maxGuest: 4,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
        }
      ],
      commodities: [
        {
          id: "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
          icon: "EggCrack",
          title: "Café da manhã incluso",
          description:
            "Desfrute de um delicioso café da manhã todas as manhãs durante a sua estadia."
        }
      ],
      images: [
        {
          id: "e4d15c73-c40a-46d7-ba9b-6d2eb34b2ea2",
          miniUrl:
            "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
          normalUrl:
            "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
          preloadUrl:
            "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
          referenceId: "a431617a-bb6a-4390-8b0f-6702f1efd67f",
          tableReference: "rooms"
        },
        {
          id: "3808053d-f45e-4b41-afc4-56853e2eac26",
          miniUrl:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          referenceId: "a431617a-bb6a-4390-8b0f-6702f1efd67f",
          tableReference: "rooms"
        }
      ]
    }
  });

  await db.room.create({
    data: {
      id: "24b194c4-acfe-492a-8309-8309c9231643",
      hotelId: "18af6ce0-76df-4a87-b706-b01aa205b8e7",
      name: "Quarto Classic",
      maxGuest: 2,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
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
          id: "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
          icon: "Wheelchair",
          title: "Acessibilidade",
          description:
            "Garante que todos os hóspedes desfrutem de uma estadia confortável e conveniente."
        },
        {
          id: "c221f63d-28cb-4062-a79a-30c4e530725a",
          icon: "Wind",
          title: "Ar condicionado",
          description:
            "Desfrute de um ambiente confortável e controlado durante a sua estadia."
        }
      ],
      images: [
        {
          id: "13c3e7fc-d23a-4f36-bbe9-ad6e1a56c549",
          miniUrl:
            "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          referenceId: "24b194c4-acfe-492a-8309-8309c9231643",
          tableReference: "rooms"
        }
      ]
    }
  });

  // --- 02 HOTEL ROOMS (a16425a2-a2c0-44e4-a986-0762e9334119) ---
  await db.room.create({
    data: {
      id: "e3f1c69d-fbae-4d98-86cb-88b26289f85d",
      hotelId: "a16425a2-a2c0-44e4-a986-0762e9334119",
      name: "Quarto com Vista para o Mar",
      maxGuest: 4,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
        }
      ],
      commodities: [
        {
          id: "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
          icon: "Wheelchair",
          title: "Acessibilidade",
          description:
            "Garante que todos os hóspedes desfrutem de uma estadia confortável e conveniente."
        },
        {
          id: "0fe3b371-a5f6-4546-a0d3-201c2535f22b",
          icon: "Prohibit",
          title: "Apto para não fumantes",
          description:
            "Um ambiente limpo e livre de fumaça para o conforto de todos os hóspedes."
        },
        {
          id: "c221f63d-28cb-4062-a79a-30c4e530725a",
          icon: "Wind",
          title: "Ar condicionado",
          description:
            "Desfrute de um ambiente confortável e controlado durante a sua estadia."
        }
      ],
      images: [
        {
          id: "beeb4f57-b0ea-48ba-bdc9-87f6505497c7",
          miniUrl:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          referenceId: "e3f1c69d-fbae-4d98-86cb-88b26289f85d",
          tableReference: "rooms"
        }
      ]
    }
  });

  await db.room.create({
    data: {
      id: "009e96a4-7efc-45ed-b228-135b62aedd66",
      hotelId: "a16425a2-a2c0-44e4-a986-0762e9334119",
      name: "Quarto Classic",
      maxGuest: 2,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
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
          id: "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
          icon: "Wheelchair",
          title: "Acessibilidade",
          description:
            "Garante que todos os hóspedes desfrutem de uma estadia confortável e conveniente."
        },
        {
          id: "0fe3b371-a5f6-4546-a0d3-201c2535f22b",
          icon: "Prohibit",
          title: "Apto para não fumantes",
          description:
            "Um ambiente limpo e livre de fumaça para o conforto de todos os hóspedes."
        }
      ],
      images: [
        {
          id: "811a195c-8876-4428-8624-b20c6463bfb0",
          miniUrl:
            "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          referenceId: "009e96a4-7efc-45ed-b228-135b62aedd66",
          tableReference: "rooms"
        }
      ]
    }
  });

  await db.room.create({
    data: {
      id: "c49b4186-af5d-4a60-83c1-624d5ce0572f",
      hotelId: "a16425a2-a2c0-44e4-a986-0762e9334119",
      name: "Quarto Classic",
      maxGuest: 2,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
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
          id: "0fe3b371-a5f6-4546-a0d3-201c2535f22b",
          icon: "Prohibit",
          title: "Apto para não fumantes",
          description:
            "Um ambiente limpo e livre de fumaça para o conforto de todos os hóspedes."
        },
        {
          id: "c221f63d-28cb-4062-a79a-30c4e530725a",
          icon: "Wind",
          title: "Ar condicionado",
          description:
            "Desfrute de um ambiente confortável e controlado durante a sua estadia."
        }
      ],
      images: [
        {
          id: "811a195c-8876-4428-8624-b20c6463bfb0",
          miniUrl:
            "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          referenceId: "009e96a4-7efc-45ed-b228-135b62aedd66",
          tableReference: "rooms"
        }
      ]
    }
  });

  // --- 03 HOTEL ROOMS (7b896324-9662-4a49-ada4-f1faf9762ea1) ---
  await db.room.create({
    data: {
      id: "9e129f31-7aef-4d1a-8384-22055e301b09",
      hotelId: "7b896324-9662-4a49-ada4-f1faf9762ea1",
      name: "Quarto com Vista para o Mar",
      maxGuest: 4,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
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
          id: "c221f63d-28cb-4062-a79a-30c4e530725a",
          icon: "Wind",
          title: "Ar condicionado",
          description:
            "Desfrute de um ambiente confortável e controlado durante a sua estadia."
        }
      ],
      images: [
        {
          id: "47af6887-6175-4728-bbf9-dc999e74c8fd",
          miniUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          referenceId: "9e129f31-7aef-4d1a-8384-22055e301b09",
          tableReference: "rooms"
        }
      ]
    }
  });

  await db.room.create({
    data: {
      id: "263cc3b4-2a77-4ffe-bf2a-1981e03e3629",
      hotelId: "7b896324-9662-4a49-ada4-f1faf9762ea1",
      name: "Quarto com Vista para o Mar",
      maxGuest: 4,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
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
          id: "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
          icon: "Wheelchair",
          title: "Acessibilidade",
          description:
            "Garante que todos os hóspedes desfrutem de uma estadia confortável e conveniente."
        },
        {
          id: "c221f63d-28cb-4062-a79a-30c4e530725a",
          icon: "Wind",
          title: "Ar condicionado",
          description:
            "Desfrute de um ambiente confortável e controlado durante a sua estadia."
        }
      ],
      images: [
        {
          id: "47af6887-6175-4728-bbf9-dc999e74c8fd",
          miniUrl:
            "https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          referenceId: "263cc3b4-2a77-4ffe-bf2a-1981e03e3629",
          tableReference: "rooms"
        }
      ]
    }
  });

  // --- 05 HOTEL ROOMS (1de05242-fe26-4f6e-82c2-29170ddcad78) ---
  await db.room.create({
    data: {
      id: "24edb8c7-4bbf-42f8-8443-5077f1ff61a7",
      hotelId: "1de05242-fe26-4f6e-82c2-29170ddcad78",
      name: "Quarto Hyper Mega Duplex",
      maxGuest: 4,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
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
          id: "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
          icon: "Wheelchair",
          title: "Acessibilidade",
          description:
            "Garante que todos os hóspedes desfrutem de uma estadia confortável e conveniente."
        },
        {
          id: "0fe3b371-a5f6-4546-a0d3-201c2535f22b",
          icon: "Prohibit",
          title: "Apto para não fumantes",
          description:
            "Um ambiente limpo e livre de fumaça para o conforto de todos os hóspedes."
        }
      ],
      images: [
        {
          id: "48d26e77-0311-4060-ad2d-4deef19d3fb1",
          miniUrl:
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          referenceId: "24edb8c7-4bbf-42f8-8443-5077f1ff61a7",
          tableReference: "rooms"
        },
        {
          id: "8d77980d-fb05-4d44-88f3-5a1c386674a1",
          miniUrl:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          referenceId: "24edb8c7-4bbf-42f8-8443-5077f1ff61a7",
          tableReference: "rooms"
        },
        {
          id: "53193b2b-03d5-4739-9f0c-f8a6d0ccc7ff",
          miniUrl:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          referenceId: "24edb8c7-4bbf-42f8-8443-5077f1ff61a7",
          tableReference: "rooms"
        }
      ]
    }
  });

  await db.room.create({
    data: {
      id: "48580484-823b-4978-811a-659dbe17d1c0",
      hotelId: "1de05242-fe26-4f6e-82c2-29170ddcad78",
      name: "Quarto Single",
      maxGuest: 4,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
        }
      ],
      commodities: [
        {
          id: "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
          icon: "Wheelchair",
          title: "Acessibilidade",
          description:
            "Garante que todos os hóspedes desfrutem de uma estadia confortável e conveniente."
        },
        {
          id: "0fe3b371-a5f6-4546-a0d3-201c2535f22b",
          icon: "Prohibit",
          title: "Apto para não fumantes",
          description:
            "Um ambiente limpo e livre de fumaça para o conforto de todos os hóspedes."
        },
        {
          id: "c221f63d-28cb-4062-a79a-30c4e530725a",
          icon: "Wind",
          title: "Ar condicionado",
          description:
            "Desfrute de um ambiente confortável e controlado durante a sua estadia."
        }
      ],
      images: [
        {
          id: "47af6887-6175-4728-bbf9-dc999e74c8fd",
          miniUrl:
            "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          referenceId: "48580484-823b-4978-811a-659dbe17d1c0",
          tableReference: "rooms"
        }
      ]
    }
  });

  await db.room.create({
    data: {
      id: "9b643371-0de6-4d96-82e1-d3229a714762",
      hotelId: "1de05242-fe26-4f6e-82c2-29170ddcad78",
      name: "Suíte Master",
      maxGuest: 4,
      beds: 2,
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa com vista deslumbrante para o mar. O quarto inclui comodidades modernas para seu conforto.`,
      categories: [
        {
          id: "2ef71425-2d79-451a-a5c0-d6da6e3446bc",
          title: "Classic",
          reference: "rooms"
        },
        {
          id: "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
          title: "Suíte Executiva",
          reference: "rooms"
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
          id: "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
          icon: "Wheelchair",
          title: "Acessibilidade",
          description:
            "Garante que todos os hóspedes desfrutem de uma estadia confortável e conveniente."
        },
        {
          id: "c221f63d-28cb-4062-a79a-30c4e530725a",
          icon: "Wind",
          title: "Ar condicionado",
          description:
            "Desfrute de um ambiente confortável e controlado durante a sua estadia."
        }
      ],
      images: [
        {
          id: "47af6887-6175-4728-bbf9-dc999e74c8fd",
          miniUrl:
            "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          referenceId: "9b643371-0de6-4d96-82e1-d3229a714762",
          tableReference: "rooms"
        },
        {
          id: "47af6887-6175-4728-bbf9-dc999e74c8fd",
          miniUrl:
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          fileType: "image/webp",
          thumbUrl:
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          normalUrl:
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          preloadUrl:
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          referenceId: "9b643371-0de6-4d96-82e1-d3229a714762",
          tableReference: "rooms"
        }
      ]
    }
  });
}
