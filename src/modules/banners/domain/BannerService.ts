import type {
  IBannerRepository,
  IBannerService
} from "@modules/banners/types";

import { MediaFile } from "@shared/value-objects";

import { Banner } from "./Banner";
import { BannerError } from "./BannerError";

export class BannerService implements IBannerService {
  public constructor(readonly repository: IBannerRepository) {}

  public async create(banner: IBanner): Promise<Banner> {
    BannerError.propertyImageNotAccepted.apply(banner.image);
    return await this.repository.save(new Banner(banner));
  }

  public async getAll({
    onlyActive
  }: {
    onlyActive: boolean;
  }): Promise<Banner[]> {
    return await this.repository.findAll({ onlyActive });
  }

  public async get(id: string): Promise<Banner> {
    return await this.repository.find(id);
  }

  public async edit(banner: IBanner): Promise<Banner> {
    BannerError.propertyImageNotAccepted.apply(banner.image);
    return this.repository.update(new Banner(banner));
  }

  public async remove(id: string): Promise<void> {
    return await this.repository.delete(id);
  }

  public async uploadImage(image: IMediaFile): Promise<MediaFile> {
    return await this.repository.saveImage(new MediaFile(image));
  }

  public async removeImage(bannerId: string): Promise<void> {
    return await this.repository.deleteImage(bannerId);
  }

  public async reorder(updatedPosition: ReorderDTO[]): Promise<void> {
    return await this.repository.reorder(updatedPosition);
  }

  public async removeAll(): Promise<void> {
    return await this.repository.deleteAll();
  }
}
