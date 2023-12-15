import type { IHotelService } from "@modules/hotels/types";
import { Service } from "@modules/hotels/decorators";

@Service
export class Edit {
  service: IHotelService;
  updatedHotel: IHotel;

  public constructor(attr: { updatedHotel: IHotel }) {
    this.updatedHotel = attr.updatedHotel;
  }

  public async execute() {
    return this.service.edit(this.updatedHotel).then((hotel) => ({
      message: "Hotel edited successfully",
      error: null,
      statusCode: 200,
      data: hotel.get
    }));
  }
}
