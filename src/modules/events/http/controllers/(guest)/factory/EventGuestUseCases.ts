import { getUser } from "@/shared/utils";
import {
  FindBySlug,
  FindOne,
  List,
  ListCategories,
  ListCities,
  ListEventHotels,
  ListPublicApproved,
  ListStates
} from "@modules/events/app";
import { FastifyRequest } from "fastify";

namespace EventGuestUseCases {
  export function makeFindOne(id: string) {
    return new FindOne({ id });
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

  export function makeListEventHotels(eventId: string) {
    return new ListEventHotels({ eventId });
  }

  export function makeListPublicApproved(
    params: EventListDTO,
    req: FastifyRequest
  ) {
    return new ListPublicApproved({
      params,
      user: getUser(req)
    });
  }

  export function makeFindBySlug(slug: string) {
    return new FindBySlug({ slug });
  }
}

export default EventGuestUseCases;
