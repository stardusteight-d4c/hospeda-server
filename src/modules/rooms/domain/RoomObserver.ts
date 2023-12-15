import type { IEventService } from "@modules/events/types";

import { FindByIdCommand } from "@shared/events";
import { IRoomService } from "../types";
import { GetHotelRoomsPriceRangeCommand } from "@/shared/events/GetHotelRoomsPriceRangeCommand";

export class RoomObserver implements IObserver {
  watching: string[] = ["get_hotel_rooms_price_range"];

  private static instance: RoomObserver;
  private readonly roomService: IRoomService;

  private constructor(roomService: IRoomService) {
    this.roomService = roomService;
  }

  public static getInstance(
    roomService?: IRoomService
  ): RoomObserver {
    if (!RoomObserver.instance) {
      if (!roomService) {
        throw new Error(
          "RoomService must be provided when creating the first instance of RoomObserver"
        );
      }
      RoomObserver.instance = new RoomObserver(roomService);
    }
    return RoomObserver.instance;
  }

  async notifyService(command: ICommand) {
    if (command.name === "get_hotel_rooms_price_range") {
      const { hotelId } = command as GetHotelRoomsPriceRangeCommand;
      return await this.roomService.getHotelRoomsPriceRange(hotelId);
    }
  }
}
