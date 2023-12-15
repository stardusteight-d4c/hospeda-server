import { app } from "@setup/bootstrap";

import { IRoomService } from "@modules/rooms/types";

interface IService {
  service: IRoomService;
}

export function Service<T extends Constructor>(
  constructor: T
): T | void {
  return class extends constructor implements IService {
    service = app().roomService;
  };
}
