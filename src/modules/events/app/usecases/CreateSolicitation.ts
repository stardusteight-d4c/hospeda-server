import type { IEventService } from "@modules/events/types";

import { Service } from "@modules/events/decorators";
import { User } from "@modules/users/domain";

@Service
export class CreateSolicitation {
  service: IEventService;
  event: IEvent;
  user: UserTokenDTO;

  public constructor(attr: { event: IEvent; user: UserTokenDTO }) {
    this.user = attr.user;
    this.event = attr.event;
  }

  public async execute() {
    return this.service
      .register(
        {
          ...this.event,
          status: "pending"
        },
        this.user.id
      )
      .then(async (event) => {
        const { hotels } = event.get as {
          hotels: IHotel[];
        };
        const parsedHotels = hotels.map((hotel: IHotel) => {
          const { internalInformation, ...parsed } = hotel;
          return parsed;
        });
        const promoter = await this.service
          .getPromoter(this.user.id)
          .then((promoter: User) => {
            const { password, ...parsedPromoter } =
              promoter.get as IUser;
            return parsedPromoter;
          });
        return {
          message: "Solicitation create successfully",
          error: null,
          statusCode: 201,
          data: {
            ...event.get,
            promoter,
            accommodations: 200,
            bookings: 10,
            hotels: parsedHotels
          }
        };
      });
  }
}
