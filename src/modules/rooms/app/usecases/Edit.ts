import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class Edit {
  service: IRoomService;
  updatedRoom: IRoom;

  public constructor(attr: { updatedRoom: IRoom }) {
    this.updatedRoom = attr.updatedRoom;
  }

  public async execute() {
    return this.service.edit(this.updatedRoom).then((hotel) => ({
      message: "Room edited successfully",
      error: null,
      statusCode: 200,
      data: hotel.get
    }));
  }
}
