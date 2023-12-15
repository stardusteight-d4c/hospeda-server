import { IHotelService } from "@modules/hotels/types";

import {
  CheckIfIdsExistCommand,
  FindByIdCommand
} from "@shared/events";

export class HotelObserver implements IObserver {
  watching: string[] = ["find_by_id", "check_if_ids_exist"];

  private static instance: HotelObserver;
  private readonly hotelService: IHotelService;

  private constructor(hotelService: IHotelService) {
    this.hotelService = hotelService;
  }

  public static getInstance(
    hotelService?: IHotelService
  ): HotelObserver {
    if (!HotelObserver.instance) {
      if (!hotelService) {
        throw new Error(
          "HotelService must be provided when creating the first instance of HotelObserver"
        );
      }
      HotelObserver.instance = new HotelObserver(hotelService);
    }
    return HotelObserver.instance;
  }

  async notifyService(command: ICommand) {
    if (command.name === "find_by_id") {
      const { id } = command as FindByIdCommand;
      return await this.hotelService.get(id);
    }

    if (command.name === "check_if_ids_exist") {
      const { ids } = command as CheckIfIdsExistCommand;
      return await this.hotelService.checkIfHotelsExist(ids);
    }
  }
}
