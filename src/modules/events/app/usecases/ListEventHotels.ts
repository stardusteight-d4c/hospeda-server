import type { IEventHotelService } from "@modules/events/types";

import { EventHotelService } from "@modules/events/decorators";

@EventHotelService
export class ListEventHotels {
  eventHotelService: IEventHotelService;
  eventId: string;

  public constructor(attr: { eventId: string }) {
    this.eventId = attr.eventId;
  }

  public async execute() {
    return this.eventHotelService
      .getMany(this.eventId)
      .then((eventHotels) => {
        return {
          message: "Get eventHotels successfully",
          error: null,
          statusCode: 200,
          data: eventHotels.map((eventHotel) => eventHotel.get)
        };
      });
  }
}
