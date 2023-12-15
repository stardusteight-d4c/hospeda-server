import { Event, EventHotelRoom } from "@modules/events/domain";

interface IEventHotelRoomService {
  register(eventHotelRoom: IEventHotelRoom): Promise<EventHotelRoom>;
  edit(
    editedEventHotelRoom: Partial<IEventHotelRoom>
  ): Promise<EventHotelRoom>;
}
