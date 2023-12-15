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
export class EditSolicitation {
  service: IEventService;
  eventHotelService: IEventHotelService;
  eventHotelRoomService: IEventHotelRoomService;
  editedData: EditSolicitationDTO;
  createdEventHotelRoomData: CreatedEventHotelRoomDataDTO;
  eventId: string;

  public constructor(attr: {
    editedData: EditSolicitationDTO;
    createdEventHotelRoomData: CreatedEventHotelRoomDataDTO;
    eventId: string;
  }) {
    this.editedData = attr.editedData;
    this.createdEventHotelRoomData = attr.createdEventHotelRoomData;
    this.eventId = attr.eventId;
  }

  public async execute() {
    await this.service.get(this.eventId);

    const solicitation = this.editedData.solicitation;
    const availableQuantitiesEditedData =
      this.editedData.hotels.eventHotelRooms.map((room) => {
        return room.availableQuantity;
      });
    const availableQuantitiesCreatedData =
      this.createdEventHotelRoomData.map((room) => {
        return room.availableQuantity;
      });

    const accommodations1 = availableQuantitiesEditedData.reduce(
      (acc, current) => acc + current,
      0
    );
    const accommodations2 = availableQuantitiesCreatedData.reduce(
      (acc, current) => acc + current,
      0
    );

    const accommodations = accommodations1 + accommodations2;

    try {
      for (const hotel of this.editedData.hotels.eventHotels) {
        if (hotel) {
          await this.editEventHotel(hotel);
        }
      }
      for (const room of this.editedData.hotels.eventHotelRooms) {
        if (room) {
          await this.editEventHotelRoom(room);
        }
      }
      await this.createEventHotelRooms();
    } catch (error) {
      throw error;
    }

    return {
      message:
        "Solicitation edited successfully, EventHotels, EventHotelRooms and Event edited",
      error: null,
      statusCode: 201,
      data: await this.editSolicitation({
        eventId: this.eventId,
        accommodations,
        status: solicitation.status,
        extras: solicitation.extras
      }).then((event) => event.get)
    };
  }

  private async editEventHotel(hotel: EditSolicitationEventHotelDTO) {
    await this.eventHotelService.edit(hotel);
  }

  private async editEventHotelRoom(
    room: EditSolicitationEventHotelRoomDTO
  ) {
    await this.eventHotelRoomService.edit({
      id: room.id,
      availableQuantity: room.availableQuantity,
      negotiatedValue: room.negotiatedValue,
      status: room.status
    });
  }

  private async editSolicitation(solicitation: SolicitationDTO) {
    return await this.service.edit({
      id: solicitation.eventId,
      status: solicitation.status as TEventStatus,
      extras: solicitation.extras,
      accommodations: solicitation.accommodations
    } as IEvent);
  }

  private async createEventHotelRooms() {
    this.createdEventHotelRoomData.map(async (eventHotelRoom) => {
      await this.eventHotelRoomService.register({
        roomId: eventHotelRoom.roomId,
        eventHotelId: eventHotelRoom.eventHotelId,
        availableQuantity: eventHotelRoom.availableQuantity,
        negotiatedValue: eventHotelRoom.negotiatedValue,
        status: eventHotelRoom.status
      });
    });
  }
}
