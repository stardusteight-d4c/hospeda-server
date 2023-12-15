import type { IEventService } from "@modules/events/types";

import { FindByIdCommand } from "@shared/events";

export class EventObserver implements IObserver {
  watching: string[] = ["find_by_id"];

  private static instance: EventObserver;
  private readonly eventService: IEventService;

  private constructor(eventService: IEventService) {
    this.eventService = eventService;
  }

  public static getInstance(
    hotelService?: IEventService
  ): EventObserver {
    if (!EventObserver.instance) {
      if (!hotelService) {
        throw new Error(
          "EventService must be provided when creating the first instance of EventObserver"
        );
      }
      EventObserver.instance = new EventObserver(hotelService);
    }
    return EventObserver.instance;
  }

  async notifyService(command: ICommand) {
    if (command.name === "find_by_id") {
      const { id } = command as FindByIdCommand;
      return await this.eventService.get(id);
    }
  }
}
