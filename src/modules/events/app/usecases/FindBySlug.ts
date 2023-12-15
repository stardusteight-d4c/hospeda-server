import type { IEventService } from "@modules/events/types";
import { Service } from "@modules/events/decorators";
import { EventError } from "@modules/events/domain";

import { calculateDistance } from "@shared/utils";

@Service
export class FindBySlug {
  service: IEventService;
  slug: string;

  constructor(attr: { slug: string }) {
    this.slug = attr.slug;
  }

  public async execute() {
    return this.service.getBySlug(this.slug).then((event) => {
      const hotelsWithDistance = event.get.hotels?.map((hotel: any) =>
        this.calculateHotelDistance(hotel, event.get)
      );
      return {
        message: "Get event successfully",
        error: null,
        statusCode: 200,
        data: { ...event.get, hotels: hotelsWithDistance }
      };
    });
  }

  private calculateHotelDistance(hotel: IHotel, event: IEvent) {
    if (event) {
      const lat2 = Number(event.address.latitude);
      const lon2 = Number(event.address.longitude);
      return {
        ...hotel,
        distanceInKm: calculateDistance(
          {
            lat1: hotel.address.latitude,
            lon1: hotel.address.longitude
          },
          { lat2, lon2 }
        )
      };
    } else {
      return hotel;
    }
  }
}
