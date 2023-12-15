import { event as eventBus } from "@config/event";

import type {
  IEventHotelRepository,
  IEventHotelService
} from "@modules/events/types/event-hotel";
import {
  EventObserver,
  EventError,
  EventHotel,
  Event
} from "@modules/events/domain";
import { Hotel, HotelObserver } from "@modules/hotels/domain";

import { FindByIdCommand } from "@shared/events";

export class EventHotelService implements IEventHotelService {
  public constructor(readonly repository: IEventHotelRepository) {}

  private async findHotel(hotelId: string) {
    const findHotel = new FindByIdCommand(hotelId);
    const { uniqueResponse: hotel }: { uniqueResponse: Hotel } =
      await eventBus.emit({
        command: findHotel,
        targetObserver: HotelObserver.getInstance()
      });
    EventError.hotelNotFound.apply(hotel);
    return hotel;
  }

  private async findEvent(eventId: string) {
    const findEvent = new FindByIdCommand(eventId);
    const { uniqueResponse: event }: { uniqueResponse: Event } =
      await eventBus.emit({
        command: findEvent,
        targetObserver: EventObserver.getInstance()
      });
    EventError.eventNotFound.apply(event);
    return event;
  }

  public async register(
    eventHotel: ApproveSolicitationEventHotelDTO
  ): Promise<EventHotel> {
    const hotel = await this.findHotel(eventHotel.hotelId);
    const event = await this.findEvent(eventHotel.eventId);
    const eventHotelInstance = new EventHotel({
      event: event.get,
      hotel: hotel.get,
      startDateAllotment: eventHotel.startDateAllotment,
      endDateAllotment: eventHotel.endDateAllotment
    });
    return await this.repository.save(eventHotelInstance);
  }

  public async getMany(id: string): Promise<EventHotel[]> {
    await this.findEvent(id);
    return await this.repository.findMany(id);
  }

  public async edit(
    editedEventHotel: Partial<EditSolicitationEventHotelDTO>
  ): Promise<EventHotel> {
    const eventHotelInstance = new EventHotel({
      id: editedEventHotel.id,
      startDateAllotment: editedEventHotel.startDateAllotment,
      endDateAllotment: editedEventHotel.endDateAllotment
    } as IEventHotel);
    return await this.repository.update(eventHotelInstance);
  }
}
