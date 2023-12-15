import type { IHotelService } from "@modules/hotels/types";
import { Service } from "@modules/hotels/decorators";

import { calculateDistance } from "@shared/utils";

@Service
export class FindEventHotels {
  service: IHotelService;
  eventId: string;
  distance: string[] | undefined;
  role: TUserRole | undefined;

  public constructor(attr: {
    eventId: string;
    role: TUserRole | undefined;
    distance: string | undefined;
  }) {
    this.eventId = attr.eventId;
    this.role = attr.role;
    this.distance = attr.distance && attr.distance.trim().split(",");
  }

  public async execute() {
    return this.service
      .getEventHotels(this.eventId)
      .then((eventHotels) => {
        return this.generateResponse(
          this.calculateHotelDistance(
            eventHotels.map((hotel) => hotel.get)
          )
        );
      });
  }

  private calculateHotelDistance(hotels: IHotel[]) {
    return hotels.flatMap((hotel) => {
      if (this.distance && this.distance.length === 2) {
        const lat2 = Number(this.distance[0].trim());
        const lon2 = Number(this.distance[1].trim());
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
    });
  }

  private generateResponse(hotels: IHotel[]) {
    if (this.role !== "admin") {
      return {
        message: "Get hotels successfully",
        error: null,
        statusCode: 200,
        data: hotels.map((hotel) => {
          const { internalInformation, ...transformedHotel } = hotel;
          return transformedHotel;
        })
      };
    } else {
      return {
        message:
          "Admin role identified, get hotels with internal informations",
        error: null,
        statusCode: 200,
        data: hotels
      };
    }
  }
}
