import type { IBannerService } from "@modules/banners/types";
import { Service } from "@modules/banners/decorators";
import { BannerError } from "@modules/banners/domain";

@Service
export class FindOne {
  service: IBannerService;
  id: string;

  constructor(attr: { id: string }) {
    this.id = attr.id;
  }

  public async execute() {
    return this.service.get(this.id).then((event) => {
      BannerError.bannerNotFound.apply(event);
      return {
        message: "Get banner successfully",
        error: null,
        statusCode: 200,
        data: event.get
      };
    });
  }
}
