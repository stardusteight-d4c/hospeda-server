import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class Delete {
  service: IRoomService;
  id: string;

  public constructor(id: string) {
    this.id = id;
  }

  public async execute() {
    return this.service.remove(this.id).then(() => {
      return {
        message: "The room has been deleted",
        error: null,
        statusCode: 200,
        data: null
      };
    });
  }
}
