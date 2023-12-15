interface EditSolicitationDTO {
  solicitation: {
    status: string;
    extras: {
      transfer: boolean;
      insurance: boolean;
      specialPackages: boolean;
    };
  };
  hotels: EditSolicitationHotelDTO;
}

interface EditSolicitationHotelDTO {
  eventHotels: EditSolicitationEventHotelDTO[];
  eventHotelRooms: EditSolicitationEventHotelRoomDTO[];
}

interface EditSolicitationEventHotelDTO {
  id: string;
  startDateAllotment: Date;
  endDateAllotment: Date;
}

interface EditSolicitationEventHotelRoomDTO {
  id: string;
  status: TEventHotelRoomStatus;
  availableQuantity: number;
  negotiatedValue: number;
}

type CreatedEventHotelRoomDataDTO = Array<
  EventHotelRoomDTO & {
    eventHotelId: string;
  }
>;

interface EditSolicitationBodyDTO {
  editedData: EditSolicitationDTO;
  createdEventHotelRoomData: CreatedEventHotelRoomDataDTO;
}
