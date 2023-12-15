import {
  Service,
  EventHotelService,
  EventHotelRoomService
} from "@modules/events/decorators";
import type { IEventService } from "@modules/events/types";
import type { IEventHotelService } from "@modules/events/types/event-hotel";
import type { IEventHotelRoomService } from "@modules/events/types/event-hotel-room";

@Service
@EventHotelService
@EventHotelRoomService
export class ApproveSolicitation {
  service: IEventService;
  eventHotelService: IEventHotelService;
  eventHotelRoomService: IEventHotelRoomService;
  approvalData: ApproveSolicitationDTO;
  eventId: string;

  public constructor(attr: {
    approvalData: ApproveSolicitationDTO;
    eventId: string;
  }) {
    this.approvalData = attr.approvalData;
    this.eventId = attr.eventId;
  }

  public async execute() {
    const solicitation = this.approvalData.solicitation;
    const eventHotelRooms = this.approvalData.hotels.flatMap(
      (hotel) => hotel.eventHotelRooms
    );
    const availableQuantities = eventHotelRooms.map((room) => {
      return room.availableQuantity;
    });
    const accommodations = availableQuantities.reduce(
      (acc, current) => acc + current,
      0
    );

    try {
      for (const hotel of this.approvalData.hotels) {
        await this.createEventHotelAndRooms(hotel);
      }
    } catch (error) {
      throw error;
    }

    return {
      message:
        "Solicitation successfully approved, EventHotel and EventHotelRooms created",
      error: null,
      statusCode: 201,
      data: await this.approveSolicitation({
        eventId: this.eventId,
        accommodations,
        status: solicitation.status,
        extras: solicitation.extras
      }).then((event) => event.get)
    };
  }

  private async createEventHotelAndRooms(
    hotel: ApproveSolicitationHotelDTO
  ) {
    const eventHotelCreated = await this.eventHotelService.register({
      ...hotel.eventHotel,
      eventId: this.eventId
    });
    hotel.eventHotelRooms.map(async (eventHotelRoom) => {
      await this.eventHotelRoomService.register({
        roomId: eventHotelRoom.roomId,
        eventHotelId: eventHotelCreated.get.id,
        availableQuantity: eventHotelRoom.availableQuantity,
        negotiatedValue: eventHotelRoom.negotiatedValue,
        status: eventHotelRoom.status
      });
    });
  }

  private async approveSolicitation(solicitation: SolicitationDTO) {
    return await this.service.edit({
      id: solicitation.eventId,
      status: solicitation.status as TEventStatus,
      extras: solicitation.extras,
      accommodations: solicitation.accommodations
    } as IEvent);
  }
}
