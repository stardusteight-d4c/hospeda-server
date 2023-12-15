import type { IBannerService } from "@modules/banners/types";

import { Service } from "@modules/banners/decorators";

@Service
export class FindAll {
  service: IBannerService;

  public constructor() {}

  public async execute() {
    return this.service
      .getAll({ onlyActive: false })
      .then((banners) => ({
        message: "Get banners successfully",
        error: null,
        statusCode: 200,
        data: banners.map((banner) => banner.get)
      }));
  }
}
