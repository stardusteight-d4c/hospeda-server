import type { IEventService } from "@modules/events/types";

import { Service } from "@modules/events/decorators";

@Service
export class ListCategories {
  service: IEventService;

  public constructor() {}

  public async execute() {
    return this.service.getCategories().then((categories) => {
      return {
        message: null,
        error: null,
        statusCode: 200,
        data: categories.map((category) => category.get)
      };
    });
  }
}
