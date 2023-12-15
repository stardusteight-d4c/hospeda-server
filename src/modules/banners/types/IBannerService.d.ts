import { Banner } from "@modules/banners/domain";

import { MediaFile } from "@shared/value-objects";

interface IBannerService {
  create(banner: IBanner): Promise<Banner>;
  getAll(params?: { onlyActive?: boolean }): Promise<Banner[]>;
  get(id: string): Promise<Banner>;
  edit(banner: IBanner): Promise<Banner>;
  remove(id: string): Promise<void>;
  reorder(updatedPosition: ReorderDTO[]): Promise<void>;
  uploadImage(image: IMediaFile): Promise<MediaFile>;
  removeImage(bannerId: string): Promise<void>;
  removeAll(): Promise<void>;
}
