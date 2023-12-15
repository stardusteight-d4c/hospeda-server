import type { IHotelService } from "@modules/hotels/types";
import { Service } from "@modules/hotels/decorators";

import { calculateDistance } from "@shared/utils";

@Service
export class FindOne {
  service: IHotelService;
  id: string;
  include: string[] | undefined;
  distance: string[] | undefined;
  role: TUserRole | undefined;

  public constructor(attr: {
    id: string;
    role: TUserRole | undefined;
    include: string | undefined;
    distance: string | undefined;
  }) {
    this.id = attr.id;
    this.role = attr.role;
    this.include = attr.include && attr.include.trim().split(".");
    this.distance = attr.distance && attr.distance.trim().split(",");
  }

  public async execute() {
    return this.service
      .get(this.id, this.include)
      .then((hotel) =>
        this.generateResponse(this.calculateHotelDistance(hotel.get))
      );
  }

  private calculateHotelDistance(hotel: IHotel) {
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
  }

  private generateResponse(hotel: IHotel) {
    if (this.role !== "admin") {
      const { internalInformation, ...transformedHotel } = hotel;
      return {
        message: "Get hotel successfully",
        error: null,
        statusCode: 200,
        data: transformedHotel
      };
    } else {
      return {
        message:
          "Admin role identified, get hotel with internal informations",
        error: null,
        statusCode: 200,
        data: hotel
      };
    }
  }
}
