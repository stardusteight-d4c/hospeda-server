import { app } from "@setup/bootstrap";

import { IEventService } from "@modules/events/types";

interface IService {
  service: IEventService;
}

export function Service<T extends Constructor>(
  constructor: T
): T | void {
  return class extends constructor implements IService {
    service = app().eventService;
  };
}
