import type { IBannerService } from "@modules/banners/types";
import { Service } from "@modules/banners/decorators";

@Service
export class Delete {
  service: IBannerService;
  id: string;

  public constructor(id: string) {
    this.id = id;
  }

  public async execute() {
    return this.service.remove(this.id).then(() => {
      return {
        message: "The banner has been deleted",
        error: null,
        statusCode: 200,
        data: null
      };
    });
  }
}
