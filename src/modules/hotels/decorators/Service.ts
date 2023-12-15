import { app } from "@setup/bootstrap";

import { IHotelService } from "@modules/hotels/types";

interface IService {
  service: IHotelService;
}

export function Service<T extends Constructor>(
  constructor: T
): T | void {
  return class extends constructor implements IService {
    service = app().hotelService;
  };
}
