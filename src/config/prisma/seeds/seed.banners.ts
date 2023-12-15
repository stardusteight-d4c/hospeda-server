import { db } from "@/connect";

export async function banners() {
  // --- 01 BANNER ---
  await db.banner.create({
    data: {
      id: "dc141d23-505f-4733-b9c4-921fce8bce50",
      title: "Reserve agora para ofertas exclusivas!",
      status: "active",
      position: 1,
      buttonTitle: "Reservar Agora",
      buttonLink: "https://www.booking.com",
      image: {
        id: "f681e1a0-e79a-4b93-a390-1972ea4bc68c",
        referenceId: "dc141d23-505f-4733-b9c4-921fce8bce50",
        tableReference: "banners",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbUrl:
          "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        normalUrl:
          "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        preloadUrl:
          "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
  });

  // --- 02 BANNER ---
  await db.banner.create({
    data: {
      id: "050dcadc-d94f-4934-958b-4c6f93053722",
      title: "Inicie a sua viagem com centenas de ofertas!",
      status: "active",
      position: 2,
      buttonTitle: "Reservar Agora",
      buttonLink: "https://www.booking.com",
      image: {
        id: "586e975c-b40b-4c22-b7c1-5eb2aba5f3a4",
        referenceId: "050dcadc-d94f-4934-958b-4c6f93053722",
        tableReference: "banners",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbUrl:
          "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        normalUrl:
          "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        preloadUrl:
          "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
  });

  // --- 03 BANNER ---
  await db.banner.create({
    data: {
      id: "5bc09baf-7676-4267-9b6b-50f00127405e",
      title: "Lucre mais com seu evento, hospede ele no melhor lugar",
      status: "active",
      position: 3,
      buttonTitle: "Cadastre-se",
      buttonLink:
        "https://hospeda-client-0818452130fb.herokuapp.com/signup",
      image: {
        id: "69461b8e-3731-4607-beb8-3d77c044eec2",
        referenceId: "5bc09baf-7676-4267-9b6b-50f00127405e",
        tableReference: "banners",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1614957004131-9e8f2a13123c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbUrl:
          "https://images.unsplash.com/photo-1614957004131-9e8f2a13123c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        normalUrl:
          "https://images.unsplash.com/photo-1614957004131-9e8f2a13123c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        preloadUrl:
          "https://images.unsplash.com/photo-1614957004131-9e8f2a13123c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
  });

  // --- 04 BANNER ---
  await db.banner.create({
    data: {
      id: "12d02edb-e93b-4c0b-b5f2-336c1105c072",
      title: "Lucre mais com seu evento, hospede ele no melhor lugar",
      status: "inactive",
      position: 4,
      buttonTitle: "Cadastre-se",
      buttonLink:
        "https://hospeda-client-0818452130fb.herokuapp.com/signup",
      image: {
        id: "6c82e5b9-f914-4ba2-8419-793368768aa4",
        referenceId: "12d02edb-e93b-4c0b-b5f2-336c1105c072",
        tableReference: "banners",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbUrl:
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        normalUrl:
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        preloadUrl:
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
  });

  // --- 05 BANNER ---
  await db.banner.create({
    data: {
      id: "9c33bef8-992d-48c3-814e-cbcca1d66b9f",
      title: "Planeje Sua Estadia - Reserve com Confiança.",
      status: "active",
      position: 5,
      image: {
        id: "ab979fef-75cf-404a-b2cc-d7326219ba4c",
        referenceId: "9c33bef8-992d-48c3-814e-cbcca1d66b9f",
        tableReference: "banners",
        fileType: "image/webp",
        miniUrl:
          "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbUrl:
          "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        normalUrl:
          "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        preloadUrl:
          "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
  });
}
