import { FastifyRequest } from "fastify";
import { Multipart } from "@fastify/multipart";

import {
  Create,
  Edit,
  Delete,
  UploadImage,
  DeleteImage,
  Reorder,
  FindAll,
  FindOne
} from "@modules/banners/app";

import {
  CloudinaryStorageFileAdapter,
  MockStorageFileAdapter
} from "@shared/adapters";

namespace BannerAdminUseCases {
  export function makeFindAll() {
    return new FindAll();
  }

  export function makeFindOne(id: string) {
    return new FindOne({ id });
  }

  export function makeCreate(banner: IBanner) {
    return new Create({ banner });
  }

  export function makeReorder(updatedPosition: ReorderDTO[]) {
    return new Reorder({ updatedPosition });
  }

  export function makeEdit(updatedBanner: IBanner) {
    return new Edit({
      updatedBanner
    });
  }

  export function makeDelete(bannerId: string) {
    return new Delete(bannerId);
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

  export function makeDeleteImage(bannerId: string) {
    return new DeleteImage(bannerId);
  }
}

export default BannerAdminUseCases;
