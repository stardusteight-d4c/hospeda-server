import type { IHotelService } from "@modules/hotels/types";

import { Service } from "@modules/hotels/decorators";

@Service
export class ListCities {
  service: IHotelService;

  public constructor() {}

  public async execute() {
    return this.service.getCities().then((cities) => ({
      message: null,
      error: null,
      statusCode: 200,
      data: cities
    }));
  }
}
