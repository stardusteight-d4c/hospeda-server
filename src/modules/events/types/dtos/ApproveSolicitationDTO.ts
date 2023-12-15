interface ApproveSolicitationDTO {
  solicitation: {
    status: string;
    extras: {
      transfer: boolean;
      insurance: boolean;
      specialPackages: boolean;
    };
  };
  hotels: ApproveSolicitationHotelDTO[];
}

interface ApproveSolicitationHotelDTO {
  eventHotel: {
    hotelId: string;
    startDateAllotment: Date;
    endDateAllotment: Date;
  };
  eventHotelRooms: {
    roomId: string;
    status: TEventHotelRoomStatus;
    availableQuantity: number;
    negotiatedValue: number;
  }[];
}
