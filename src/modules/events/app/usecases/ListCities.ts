import type { IEventService } from "@modules/events/types";

import { Service } from "@modules/events/decorators";

@Service
export class ListCities {
  service: IEventService;

  public constructor() {}

  public async execute() {
    return this.service.getCities().then((cities) => ({
      message: null,
      error: null,
      statusCode: 200,
      data: cities
    }));
  }
}
