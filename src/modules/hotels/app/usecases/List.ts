import type { IHotelService } from "@modules/hotels/types";
import { Hotel } from "@modules/hotels/domain";
import { Service } from "@modules/hotels/decorators";
import { parseParams } from "@modules/hotels/app/usecases/helpers";

import { BadRequestException } from "@shared/errors";
import { calculateDistance } from "@shared/utils";

@Service
export class List {
  service: IHotelService;
  params: Partial<HotelListDomainDTO>;
  role: TUserRole | undefined;

  public constructor(attr: {
    params: Partial<HotelListDTO>;
    role: TUserRole | undefined;
  }) {
    this.params = this.transformRequestParams(attr.params);
    this.role = attr.role;
  }

  public async execute() {
    return this.service
      .list(this.params)
      .then(
        async (list) =>
          await this.generateReponse(list).then((res) => res)
      );
  }

  private async generateReponse(list: PaginatedList<Hotel[]>) {
    const message =
      this.role !== "admin"
        ? "List hotels successfully"
        : "List hotels with internal informations";

    const data = {
      ...list,
      items: await Promise.all(
        list.items.map(async (hotel) => {
          if (this.role !== "admin") {
            const { internalInformation, ...transformedHotel } =
              this.calculateHotelDistance(hotel.get);
            const priceRange = await this.getRoomsPriceRange(
              hotel.get.id
            );
            return { ...transformedHotel, priceRange };
          } else {
            const transformedHotel = {
              ...this.calculateHotelDistance(hotel.get)
            };
            const priceRange = await this.getRoomsPriceRange(
              hotel.get.id
            );
            return { ...transformedHotel, priceRange };
          }
        })
      )
    };

    return {
      message,
      error: null,
      statusCode: 200,
      data
    };
  }

  private async getRoomsPriceRange(hotelId: string) {
    return await this.service.getHotelRoomsPriceRange(hotelId);
  }

  private calculateHotelDistance(hotel: IHotel) {
    if (this.params.distance.length === 2) {
      const lat2 = Number(this.params.distance[0].trim());
      const lon2 = Number(this.params.distance[1].trim());
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

  private transformRequestParams(
    attrParams: Partial<HotelListDTO>
  ): Partial<HotelListDomainDTO> {
    const params = parseParams(attrParams);
    this.validatePagination(params.pageSize, params.currentPage);
    return params;
  }

  private validatePagination(pageSize: number, currentPage: number) {
    if (pageSize <= 0 || currentPage <= 0) {
      throw new BadRequestException("Invalid pagination values");
    }
  }
}
