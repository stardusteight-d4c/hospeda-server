import type { IEventHotelRepository } from "@modules/events/types/event-hotel";
import { EventHotel } from "@modules/events/domain";
import { db } from "@/connect";

export class EventHotelPrismaRepository
  implements IEventHotelRepository
{
  private static instance: EventHotelPrismaRepository;

  private constructor() {}

  public static getInstance(): EventHotelPrismaRepository {
    if (!EventHotelPrismaRepository.instance) {
      EventHotelPrismaRepository.instance =
        new EventHotelPrismaRepository();
    }
    return EventHotelPrismaRepository.instance;
  }

  public async save(eventHotel: EventHotel): Promise<EventHotel> {
    const createdEventHotel = await db.eventHotel.create({
      data: {
        startDateAllotment: eventHotel.get.startDateAllotment,
        endDateAllotment: eventHotel.get.endDateAllotment,
        event: {
          connect: {
            id: eventHotel.get.event.id
          }
        },
        hotel: {
          connect: {
            id: eventHotel.get.hotel.id
          }
        }
      }
    });
    return new EventHotel({
      ...createdEventHotel
    } as unknown as IEventHotel);
  }

  public async findMany(id: string): Promise<EventHotel[]> {
    const eventHotels = await db.eventHotel.findMany({
      where: {
        eventId: id
      },
      include: {
        eventHotelRooms: true
      }
    });

    if (eventHotels) {
      return eventHotels.map(
        (eventHotel) =>
          new EventHotel({
            ...eventHotel
          } as unknown as IEventHotel)
      );
    }
    return null;
  }

  public async update(
    editedEventHotel: EventHotel
  ): Promise<EventHotel> {
    const eventHotelEdited = await db.eventHotel.update({
      where: {
        id: editedEventHotel.get.id
      },
      data: {
        startDateAllotment: editedEventHotel.get.startDateAllotment,
        endDateAllotment: editedEventHotel.get.endDateAllotment,
      }
    });
    return new EventHotel({
      ...eventHotelEdited
    } as unknown as IEventHotel);
  }
}
