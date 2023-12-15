import type { IHotelService } from "@modules/hotels/types";

import { Service } from "@modules/hotels/decorators";

@Service
export class Register {
  service: IHotelService;
  hotel: IHotel;

  public constructor(attr: { hotel: IHotel }) {
    this.hotel = attr.hotel;
  }

  public async execute() {
    return this.service.register(this.hotel).then((hotel) => ({
      message: "Hotel registered successfully",
      error: null,
      statusCode: 201,
      data: hotel.get
    }));
  }
}
