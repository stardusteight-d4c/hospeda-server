import { EventHotel } from "@/modules/events/domain/event-hotel/EventHotel";
import { Event } from "@modules/events/domain";

interface IEventHotelService {
  register(
    eventHotel: ApproveSolicitationEventHotelDTO
  ): Promise<EventHotel>;
  getMany(id: string): Promise<EventHotel[]>;
  edit(
    editedEventHotel: Partial<EditSolicitationEventHotelDTO>
  ): Promise<EventHotel>;
}
