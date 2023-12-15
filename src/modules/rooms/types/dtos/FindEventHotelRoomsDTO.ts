interface FindEventHotelRoomsDTO {
  hotelId: string;
  eventId: string;
}

interface FindEventHotelRoomsDTOResponse extends IRoom {
  eventHotelRoom: {
    id: string;
    eventHotelId: string;
    roomId: string;
    negotiatedValue: number;
    availableQuantity: number;
  };
}
