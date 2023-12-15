import type { IBannerService } from "@modules/banners/types";

import { Service } from "@modules/banners/decorators";

@Service
export class FindActiveBanners {
  service: IBannerService;

  public constructor() {}

  public async execute() {
    return this.service
      .getAll({ onlyActive: true })
      .then((banners) => ({
        message: "Get active banners successfully",
        error: null,
        statusCode: 200,
        data: banners.map((banner) => ({
          ...banner.get,
          isInternalLink:
            banner.get.buttonLink?.startsWith(process.env.ORIGIN) ??
            false
        }))
      }));
  }
}
