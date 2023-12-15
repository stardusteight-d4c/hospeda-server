import { EventHotel } from "@modules/events/domain/event-hotel/EventHotel";

interface IEventHotelRepository {
  save(eventHotel: EventHotel): Promise<EventHotel>;
  findMany(id: string): Promise<EventHotel[]>;
  update(editedEventHotel: Partial<EventHotel>): Promise<EventHotel>;
}
