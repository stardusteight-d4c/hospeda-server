import type { Multipart } from "@fastify/multipart";
import type { FastifyRequest } from "fastify";

import {
  CreateSolicitation,
  Delete,
  DeleteBanner,
  Edit,
  List,
  UploadBanner
} from "@modules/events/app";

import {
  CloudinaryStorageFileAdapter,
  MockStorageFileAdapter
} from "@shared/adapters";
import { getUser } from "@shared/utils";

namespace EventPromoterUseCases {
  export function makeCreateSolicitation(
    event: IEvent,
    req: FastifyRequest
  ) {
    return new CreateSolicitation({ event, user: getUser(req) });
  }

  export function makeUploadBanner(
    parts: AsyncIterableIterator<Multipart>,
    request: FastifyRequest
  ) {
    return new UploadBanner({
      parts,
      storageFileAdapter:
        process.env.ENV === "dev"
          ? new MockStorageFileAdapter(request)
          : new CloudinaryStorageFileAdapter()
    });
  }

  export function makeDelete(id: string) {
    return new Delete(id);
  }

  export function makeDeleteBanner(eventId: string) {
    return new DeleteBanner(eventId);
  }

  export function makeEdit(event: IEvent) {
    return new Edit({ updatedEvent: event });
  }

  export function makeList(
    params: EventListDTO,
    req: FastifyRequest
  ) {
    return new List({
      params,
      user: getUser(req)
    });
  }
}

export default EventPromoterUseCases;
