import type { IEventService } from "@modules/events/types";
import { Service } from "@modules/events/decorators";

@Service
export class Delete {
  service: IEventService;
  id: string;

  public constructor(id: string) {
    this.id = id;
  }

  public async execute() {
    return this.service.remove(this.id).then(() => {
      return {
        message: "The event has been deleted",
        error: null,
        statusCode: 200,
        data: null
      };
    });
  }
}
