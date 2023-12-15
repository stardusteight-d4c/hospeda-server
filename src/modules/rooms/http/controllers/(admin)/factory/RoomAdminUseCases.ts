import { FastifyRequest } from "fastify";
import { Multipart } from "@fastify/multipart";

import {
  Register,
  Edit,
  Delete,
  UploadImage,
  DeleteImages
} from "@modules/rooms/app";

import {
  MockStorageFileAdapter,
  CloudinaryStorageFileAdapter
} from "@shared/adapters";

namespace RoomAdminUseCases {
  export function makeRegister(room: IRoom) {
    return new Register({ room });
  }

  export function makeEdit(updatedRoom: IRoom) {
    return new Edit({
      updatedRoom
    });
  }

  export function makeUploadImage(
    parts: AsyncIterableIterator<Multipart>,
    request: FastifyRequest
  ) {
    return new UploadImage({
      parts,
      storageFileAdapter:
        process.env.ENV === "dev"
          ? new MockStorageFileAdapter(request)
          : new CloudinaryStorageFileAdapter()
    });
  }

  export function makeDelete(hotelId: string) {
    return new Delete(hotelId);
  }

  export function makeDeleteImages(data: {
    roomId: string;
    images: string[];
  }) {
    const { roomId, images } = data;
    return new DeleteImages({
      roomId,
      images
    });
  }
}

export default RoomAdminUseCases;
