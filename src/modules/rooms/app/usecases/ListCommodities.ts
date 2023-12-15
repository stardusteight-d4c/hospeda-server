import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class ListCommodities {
  service: IRoomService;

  public constructor() {}

  public async execute() {
    return this.service.getCommodities().then((commodities) => ({
      message: "Get all commodities successfully",
      error: null,
      statusCode: 200,
      data: commodities.map((commodity) => commodity.get)
    }));
  }
}
