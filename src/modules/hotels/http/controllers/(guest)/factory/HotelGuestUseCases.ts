import { FastifyRequest } from "fastify";

import {
  FindOne,
  List,
  ListCities,
  ListCommodities,
  ListCategories,
  ListStates,
  FindEventHotels,
  FindBySlug
} from "@modules/hotels/app";

import { getUserRole } from "@shared/utils/getUserRole";

namespace HotelGuestUseCases {
  export function makeList(
    params: HotelListDTO,
    req: FastifyRequest
  ) {
    return new List({
      params,
      role: getUserRole(req)
    });
  }

  export function makeFindOne(
    id: string,
    req: FastifyRequest,
    include: string,
    distance: string
  ) {
    return new FindOne({
      id,
      role: getUserRole(req),
      include,
      distance
    });
  }

  export function makeFindEventHotels(
    eventId: string,
    req: FastifyRequest,
    distance: string
  ) {
    return new FindEventHotels({
      eventId,
      role: getUserRole(req),
      distance
    });
  }

  export function makeFindBySlug(slug: string) {
    return new FindBySlug({ slug });
  }

  export function makeListCommodities() {
    return new ListCommodities();
  }

  export function makeCategories() {
    return new ListCategories();
  }

  export function makeListCities() {
    return new ListCities();
  }

  export function makeListStates() {
    return new ListStates();
  }
}

export default HotelGuestUseCases;
