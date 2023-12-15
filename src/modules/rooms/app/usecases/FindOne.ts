import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class FindOne {
  service: IRoomService;
  id: string;

  public constructor(id: string) {
    this.id = id;
  }

  public async execute() {
    return this.service.get(this.id).then((room) => ({
      message: "Get room successfully",
      error: null,
      statusCode: 200,
      data: room.get
    }));
  }
}
