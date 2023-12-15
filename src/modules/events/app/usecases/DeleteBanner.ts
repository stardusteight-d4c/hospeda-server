import type { IEventService } from "@modules/events/types";
import { Service } from "@modules/events/decorators";

@Service
export class DeleteBanner {
  service: IEventService;
  eventId: string;

  public constructor(eventId: string) {
    this.eventId = eventId;
  }

  public async execute() {
    return this.service.removeBanner(this.eventId).then(() => ({
      message: `Event banner of event id: ${this.eventId} have been deleted`,
      error: null,
      statusCode: 200,
      data: null
    }));
  }
}
