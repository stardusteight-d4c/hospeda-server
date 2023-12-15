import type { IBannerService } from "@modules/banners/types";
import { Service } from "@modules/banners/decorators";

@Service
export class Reorder {
  service: IBannerService;
  updatedPosition: ReorderDTO[];

  public constructor(attr: { updatedPosition: ReorderDTO[] }) {
    this.updatedPosition = attr.updatedPosition;
  }

  public async execute() {
    return this.service
      .reorder(this.updatedPosition)
      .then(() => ({
        message: "Banner reorder successfully",
        error: null,
        statusCode: 200,
        data: null
      }));
  }
}
