import type { IBannerService } from "@modules/banners/types";

import { Service } from "@modules/banners/decorators";

@Service
export class Create {
  service: IBannerService;
  banner: IBanner;

  public constructor(attr: { banner: IBanner }) {
    this.banner = attr.banner;
  }

  public async execute() {
    return this.service.create(this.banner).then((banner) => ({
      message: "Banner created successfully",
      error: null,
      statusCode: 201,
      data: banner.get
    }));
  }
}
