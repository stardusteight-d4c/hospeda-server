import type { IBannerService } from "@modules/banners/types";
import { Service } from "@modules/banners/decorators";

@Service
export class Edit {
  service: IBannerService;
  updatedBanner: IBanner;

  public constructor(attr: { updatedBanner: IBanner }) {
    this.updatedBanner = attr.updatedBanner;
  }

  public async execute() {
    return this.service.edit(this.updatedBanner).then((banner) => ({
      message: "Banner edited successfully",
      error: null,
      statusCode: 200,
      data: banner.get
    }));
  }
}
