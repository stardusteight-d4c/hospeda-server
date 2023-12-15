import type { IEventService } from "@modules/events/types";
import { Service } from "@modules/events/decorators";

@Service
export class Edit {
  service: IEventService;
  updatedEvent: IEvent;

  public constructor(attr: { updatedEvent: IEvent }) {
    this.updatedEvent = attr.updatedEvent;
  }

  public async execute() {
    return this.service.edit(this.updatedEvent).then((event) => ({
      message: "Event edited successfully",
      error: null,
      statusCode: 200,
      data: event.get
    }));
  }
}
