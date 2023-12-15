import type { IHotelService } from "@modules/hotels/types";

import { Service } from "@modules/hotels/decorators";

@Service
export class ListCommodities {
  service: IHotelService;

  public constructor() {}

  public async execute() {
    return this.service.getCommodities().then((commodities) => {
      return {
        message: null,
        error: null,
        statusCode: 200,
        data: commodities.map((commodity) => commodity.get)
      };
    });
  }
}
