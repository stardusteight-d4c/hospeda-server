import type { IEventService } from "@modules/events/types";
import { Service } from "@modules/events/decorators";
import { EventError } from "@modules/events/domain";

@Service
export class FindOne {
  service: IEventService;
  id: string;

  constructor(attr: { id: string }) {
    this.id = attr.id;
  }

  public async execute() {
    return this.service.get(this.id).then((event) => {
      EventError.eventNotFound.apply(event);
      return {
        message: "Get event successfully",
        error: null,
        statusCode: 200,
        data: event.get
      };
    });
  }
}
