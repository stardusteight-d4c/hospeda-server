import type { IHotelService } from "@modules/hotels/types";

import { Service } from "@modules/hotels/decorators";

@Service
export class ListStates {
  service: IHotelService;

  public constructor() {}

  public async execute() {
    return this.service.getStates().then((states) => ({
      message: null,
      error: null,
      statusCode: 200,
      data: states
    }));
  }
}
