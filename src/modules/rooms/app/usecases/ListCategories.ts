import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";

@Service
export class ListCategories {
  service: IRoomService;

  public constructor() {}

  public async execute() {
    return this.service.getCategories().then((categories) => ({
      message: "Get all categories successfully",
      error: null,
      statusCode: 200,
      data: categories.map((category) => category.get)
    }));
  }
}
