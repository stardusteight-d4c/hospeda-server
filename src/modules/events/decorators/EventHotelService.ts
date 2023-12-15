import { app } from "@setup/bootstrap";

import type { IEventHotelService } from "@modules/events/types/event-hotel";

interface IService {
  eventHotelService: IEventHotelService;
}

export function EventHotelService<T extends Constructor>(
  constructor: T
): T | void {
  return class extends constructor implements IService {
    eventHotelService = app().eventHotelService;
  };
}
