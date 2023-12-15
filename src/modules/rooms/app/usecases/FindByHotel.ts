import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class FindByHotel {
  service: IRoomService;
  hotelId: string;

  constructor(hotelId: string) {
    this.hotelId = hotelId;
  }

  public async execute() {
    return this.service.getAllByHotel(this.hotelId).then((rooms) => ({
      message: `Get rooms of ${this.hotelId} successfully`,
      error: null,
      statusCode: 200,
      data: rooms.map((room) => room.get)
    }));
  }
}
