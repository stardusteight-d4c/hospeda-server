import { app } from "@setup/bootstrap";

import type { IEventHotelRoomService } from "@modules/events/types/event-hotel-room";

interface IService {
  eventHotelRoomService: IEventHotelRoomService;
}

export function EventHotelRoomService<T extends Constructor>(
  constructor: T
): T | void {
  return class extends constructor implements IService {
    eventHotelRoomService = app().eventHotelRoomService;
  };
}
