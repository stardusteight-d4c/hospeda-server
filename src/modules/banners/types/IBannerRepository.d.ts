import { Banner } from "@modules/banners/domain";

import { MediaFile } from "@shared/value-objects";

interface IBannerRepository {
  save(banner: Banner): Promise<Banner>;
  findAll(params?: { onlyActive?: boolean }): Promise<Banner[]>;
  find(id: string): Promise<Banner>;
  update(banner: Banner): Promise<Banner>;
  delete(id: string): Promise<void>;
  reorder(updatedPosition: ReorderDTO[]): Promise<void>;
  saveImage(image: MediaFile): Promise<MediaFile>;
  deleteImage(bannerId: string): Promise<void>;
  deleteAll(): Promise<void>;
}
