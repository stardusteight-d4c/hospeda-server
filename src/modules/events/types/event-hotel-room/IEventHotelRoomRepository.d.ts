import { EventHotelRoom } from "@modules/events/domain";

interface IEventHotelRoomRepository {
  save(eventHotelRoom: EventHotelRoom): Promise<EventHotelRoom>;
  update(
    editedEventHotelRoom: Partial<EventHotelRoom>
  ): Promise<EventHotelRoom>;
}
