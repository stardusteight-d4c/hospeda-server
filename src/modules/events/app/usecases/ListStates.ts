import type { IEventService } from "@modules/events/types";

import { Service } from "@modules/events/decorators";

@Service
export class ListStates {
  service: IEventService;

  public constructor() {}

  public async execute() {
    return this.service.getStates().then((states) => ({
      message: null,
      error: null,
      statusCode: 200,
      data: states
    }));
  }
}
