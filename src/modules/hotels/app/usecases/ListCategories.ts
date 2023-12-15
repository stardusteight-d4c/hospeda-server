import type { IHotelService } from "@modules/hotels/types";

import { Service } from "@modules/hotels/decorators";

@Service
export class ListCategories {
  service: IHotelService;

  public constructor() {}

  public async execute() {
    return this.service.getCategories().then((categories) => {
      return {
        message: null,
        error: null,
        statusCode: 200,
        data: categories.map((category) => category.get)
      };
    });
  }
}
