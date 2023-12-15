import {
  ApproveSolicitation,
  EditSolicitation
} from "@modules/events/app/usecases";

namespace EventAdminUseCases {
  export function makeApproveSolicitation(
    eventId: string,
    approvalData: ApproveSolicitationDTO
  ) {
    return new ApproveSolicitation({ approvalData, eventId });
  }

  export function makeEditSolicitation(
    eventId: string,
    editedData: EditSolicitationDTO,
    eventHotelRooms: CreatedEventHotelRoomDataDTO
  ) {
    return new EditSolicitation({
      eventId,
      editedData,
      createdEventHotelRoomData: eventHotelRooms
    });
  }
}

export default EventAdminUseCases;
