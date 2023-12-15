import { db } from "@/connect";

import type { IBannerRepository } from "@modules/banners/types";
import { Banner } from "@modules/banners/domain";

import { MediaFile } from "@shared/value-objects";

export class BannerPrismaRepository implements IBannerRepository {
  private static instance: BannerPrismaRepository;

  private constructor() {}

  public static getInstance(): BannerPrismaRepository {
    if (!BannerPrismaRepository.instance) {
      BannerPrismaRepository.instance = new BannerPrismaRepository();
    }
    return BannerPrismaRepository.instance;
  }

  public async save(banner: Banner): Promise<Banner> {
    const { image, ...bannerParsed } = banner.get;
    return db.banner
      .create({
        data: bannerParsed
      })
      .then((createdBanner: any) => new Banner(createdBanner));
  }

  public async findAll(params?: {
    onlyActive?: boolean;
  }): Promise<Banner[]> {
    if (params.onlyActive) {
      return db.banner
        .findMany({
          where: {
            status: "active"
          },
          orderBy: {
            position: "asc"
          }
        })
        .then((banners) =>
          banners.map((banner: any) => new Banner(banner))
        );
    } else {
      return db.banner
        .findMany({
          orderBy: {
            position: "asc"
          }
        })
        .then((banners) =>
          banners.map((banner: any) => new Banner(banner))
        );
    }
  }

  public async find(id: string): Promise<Banner> {
    return db.banner
      .findFirst({
        where: {
          id
        }
      })
      .then((banner: any) => (banner ? new Banner(banner) : null));
  }

  public async update(banner: Banner): Promise<Banner> {
    const { image, ...parsedBanner } = banner.get;
    return db.banner
      .update({
        where: {
          id: parsedBanner.id
        },
        data: parsedBanner
      })
      .then((editedBanner: any) => new Banner(editedBanner));
  }

  public async delete(id: string): Promise<void> {
    await db.banner.delete({
      where: {
        id
      }
    });
  }

  public async saveImage(image: MediaFile): Promise<MediaFile> {
    await db.banner.update({
      where: {
        id: image.get.referenceId
      },
      data: {
        image: image.get as any
      }
    });

    return image;
  }

  public async deleteImage(bannerId: string): Promise<void> {
    await db.banner.update({
      where: {
        id: bannerId
      },
      data: {
        image: null
      }
    });
  }

  public async reorder(updatedPosition: ReorderDTO[]): Promise<void> {
    for (let item of updatedPosition) {
      await db.banner.update({
        where: { id: item.id },
        data: { position: item.position }
      });
    }
    return;
  }

  public async deleteAll(): Promise<void> {
     await db.banner.deleteMany();
  }
}
