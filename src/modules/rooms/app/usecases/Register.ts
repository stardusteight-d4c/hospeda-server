import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class Register {
  service: IRoomService;
  room: IRoom;

  public constructor(attr: { room: IRoom }) {
    this.room = attr.room;
  }

  public async execute() {
    return this.service.register(this.room).then((room) => ({
      message: "Registered room successfully",
      error: null,
      statusCode: 201,
      data: room.get
    }));
  }
}
