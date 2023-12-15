import { app } from "@setup/bootstrap";

import { RoomError } from "@modules/rooms/domain";

export function useRoomFactory() {
  function makeRoom(params?: Partial<IRoom>): IRoom {
    return {
      hotelId: "3d69772b-8acd-480a-8f12-0a1eb44a1c8c",
      name: "Quarto Luxo com Vista para o Mar",
      maxGuest: 2,
      beds: 1,
      categories: [
        "472d7837-bc0b-442d-b6f0-1cb2ab296ebd",
        "2ef71425-2d79-451a-a5c0-d6da6e3446bc"
      ],
      commodities: [
        "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
        "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
        "0fe3b371-a5f6-4546-a0d3-201c2535f22b"
      ],
      minRoomNightPrice: 8000,
      description: `Desfrute de uma estadia luxuosa 
      com vista deslumbrante para o mar. O quarto 
      inclui comodidades modernas para seu conforto.`,
      // availableQuantity: 8,
      ...params
    };
  }

  function makeService() {
    return app().roomService;
  }

  function makeRoomError() {
    return RoomError;
  }

  return {
    makeRoom,
    makeService,
    makeRoomError
  };
}
