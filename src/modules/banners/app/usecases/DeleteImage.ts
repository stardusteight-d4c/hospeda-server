import type { IBannerService } from "@modules/banners/types";
import { Service } from "@modules/banners/decorators";

@Service
export class DeleteImage {
  service: IBannerService;
  bannerId: string;

  public constructor(bannerId: string) {
    this.bannerId = bannerId;
  }

  public async execute() {
    return this.service.removeImage(this.bannerId).then(() => ({
      message: `Image banner have been deleted`,
      error: null,
      statusCode: 200,
      data: null
    }));
  }
}
