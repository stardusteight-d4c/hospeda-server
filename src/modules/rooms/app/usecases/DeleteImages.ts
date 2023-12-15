import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class DeleteImages {
  service: IRoomService;
  roomId: string;
  images: string[];

  public constructor(attr: { roomId: string; images: string[] }) {
    this.roomId = attr.roomId;
    this.images = attr.images;
  }

  public async execute() {
    return this.service
      .removeImages({
        roomId: this.roomId,
        images: this.images
      })
      .then(() => ({
        message: `Room image(s) of room id: ${this.roomId} have been deleted`,
        error: null,
        statusCode: 200,
        data: null
      }));
  }
}
