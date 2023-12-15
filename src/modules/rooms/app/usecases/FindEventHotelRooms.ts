import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class FindEventHotelRooms {
  service: IRoomService;
  hotelId: string;
  eventId: string;
  checkout: string;

  constructor({
    params,
    queryParams
  }: {
    params: FindEventHotelRoomsDTO;
    queryParams: { checkout: string };
  }) {
    this.hotelId = params.hotelId;
    this.eventId = params.eventId;
    this.checkout = queryParams.checkout;
  }

  public async execute() {
    return await this.service
      .getAllEventHotelRooms({
        hotelId: this.hotelId,
        eventId: this.eventId
      })
      .then((rooms) => {
        if (this.checkout && Boolean(this.checkout)) {
          return {
            message: `Get valids for checkout EventHotelRooms of <${this.hotelId} - ${this.eventId}> successfully`,
            error: null,
            statusCode: 200,
            data: rooms.filter(
              (rooms) =>
                rooms.eventHotelRoom.availableQuantity > 0 &&
                rooms.status == "available"
            )
          };
        }
        return {
          message: `Get EventHotelRooms of <${this.hotelId} - ${this.eventId}> successfully`,
          error: null,
          statusCode: 200,
          data: rooms.map((room) => room)
        };
      });
  }
}
