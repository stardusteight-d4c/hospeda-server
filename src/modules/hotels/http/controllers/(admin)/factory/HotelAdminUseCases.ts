import { FastifyRequest } from "fastify";
import { Multipart } from "@fastify/multipart";

import {
  Edit,
  Register,
  Delete,
  UploadImage,
  DeleteImages
} from "@modules/hotels/app";

import {
  CloudinaryStorageFileAdapter,
  MockStorageFileAdapter
} from "@shared/adapters";

namespace HotelAdminUseCases {
  export function makeRegister(hotel: IHotel) {
    return new Register({
      hotel
    });
  }

  export function makeEdit(updatedHotel: IHotel) {
    return new Edit({
      updatedHotel
    });
  }

  export function makeDelete(id: string) {
    return new Delete(id);
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

  export function makeDeleteImages(data: {
    hotelId: string;
    images: string[];
  }) {
    const { hotelId, images } = data;
    return new DeleteImages({
      hotelId,
      images
    });
  }
}

export default HotelAdminUseCases;
