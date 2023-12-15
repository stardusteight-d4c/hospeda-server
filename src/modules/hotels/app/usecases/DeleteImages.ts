import type { IHotelService } from "@modules/hotels/types";
import { Service } from "@modules/hotels/decorators";

@Service
export class DeleteImages {
  service: IHotelService;
  hotelId: string;
  images: string[];

  public constructor(attr: { hotelId: string; images: string[] }) {
    this.hotelId = attr.hotelId;
    this.images = attr.images;
  }

  public async execute() {
    return this.service
      .removeImages({ hotelId: this.hotelId, images: this.images })
      .then(() => ({
        message: `Hotel image(s) of hotel id: ${this.hotelId} have been deleted`,
        error: null,
        statusCode: 200,
        data: null
      }));
  }
}
