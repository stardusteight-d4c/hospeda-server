import { FastifyRequest } from "fastify";

import {
  FindOne,
  FindByHotel,
  ListCategories,
  ListCommodities,
  List,
  FindEventHotelRooms
} from "@modules/rooms/app";

import { getUserRole } from "@/shared/utils";

namespace RoomGuestUseCases {
  export function makeFindOne(hotelId: string) {
    return new FindOne(hotelId);
  }

  export function makeFindByHotel(hotelId: string) {
    return new FindByHotel(hotelId);
  }

  export function makeFindEventHotelRooms(
    params: FindEventHotelRoomsDTO,
    checkout: string
  ) {
    return new FindEventHotelRooms({
      params,
      queryParams: { checkout }
    });
  }

  export function makeListCommodities() {
    return new ListCommodities();
  }

  export function makeListCategories() {
    return new ListCategories();
  }

  export function makeList(params: RoomListDTO, req: FastifyRequest) {
    return new List({
      params,
      role: getUserRole(req)
    });
  }
}

export default RoomGuestUseCases;
