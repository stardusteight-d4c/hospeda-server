import type { IEventHotelRoomRepository } from "@modules/events/types/event-hotel-room";
import { EventHotelRoom } from "@modules/events/domain";
import { db } from "@/connect";

export class EventHotelRoomPrismaRepository
  implements IEventHotelRoomRepository
{
  private static instance: EventHotelRoomPrismaRepository;

  private constructor() {}

  public static getInstance(): EventHotelRoomPrismaRepository {
    if (!EventHotelRoomPrismaRepository.instance) {
      EventHotelRoomPrismaRepository.instance =
        new EventHotelRoomPrismaRepository();
    }
    return EventHotelRoomPrismaRepository.instance;
  }

  public async save(
    eventHotelRoom: EventHotelRoom
  ): Promise<EventHotelRoom> {
    const createdEventHotelRoom = await db.eventHotelRoom.create({
      data: {
        eventHotel: {
          connect: {
            id: eventHotelRoom.get.eventHotelId
          }
        },
        room: {
          connect: {
            id: eventHotelRoom.get.roomId
          }
        },
        availableQuantity: eventHotelRoom.get.availableQuantity,
        negotiatedValue: eventHotelRoom.get.negotiatedValue
      }
    });
    
    return new EventHotelRoom({ ...createdEventHotelRoom } as any);
  }

  public async update(
    editedEventHotelRoom: Partial<EventHotelRoom>
  ): Promise<EventHotelRoom> {    
    const createdEventHotelRoom = await db.eventHotelRoom.update({
      where: {
        id: editedEventHotelRoom.get.id
      },
      data: {
        availableQuantity: editedEventHotelRoom.get.availableQuantity,
        negotiatedValue: editedEventHotelRoom.get.negotiatedValue
      }
    });
    return new EventHotelRoom({ ...createdEventHotelRoom } as any);
  }
}
