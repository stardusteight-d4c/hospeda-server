import {
  IEventHotelRoomRepository,
  IEventHotelRoomService
} from "@modules/events/types/event-hotel-room";
import { EventHotelRoom } from "./EventHotelRoom";

export class EventHotelRoomService implements IEventHotelRoomService {
  public constructor(
    readonly repository: IEventHotelRoomRepository
  ) {}

  public async register(
    eventHotelRoom: IEventHotelRoom
  ): Promise<EventHotelRoom> {
    return await this.repository.save(
      new EventHotelRoom(eventHotelRoom)
    );
  }

  public async edit(
    editedEventHotelRoom: IEventHotelRoom
  ): Promise<EventHotelRoom> {
    return await this.repository.update(
      new EventHotelRoom(editedEventHotelRoom)
    );
  }
}
