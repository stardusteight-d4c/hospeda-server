import type { IHotelService } from "@modules/hotels/types";
import { Service } from "@modules/hotels/decorators";
import { HotelError } from "@modules/hotels/domain";

@Service
export class FindBySlug {
  service: IHotelService;
  slug: string;
  role: TUserRole | undefined;

  constructor(attr: { slug: string }) {
    this.slug = attr.slug;
  }

  public async execute() {
    return this.service.getBySlug(this.slug).then((hotel) => {
      HotelError.hotelNotFound.apply(hotel);
      return {
        message: "Get hotel successfully",
        error: null,
        statusCode: 200,
        data: hotel.get
      };
    });
  }
}
