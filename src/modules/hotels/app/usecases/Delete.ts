import type { IHotelService } from "@modules/hotels/types";
import { Service } from "@modules/hotels/decorators";

@Service
export class Delete {
  service: IHotelService;
  id: string;

  public constructor(id: string) {
    this.id = id;
  }

  public async execute() {
    return this.service.remove(this.id).then(() => {
      return {
        message: "The hotel has been deleted",
        error: null,
        statusCode: 200,
        data: null
      };
    });
  }
}
