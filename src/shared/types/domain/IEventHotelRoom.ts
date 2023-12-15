type TEventHotelRoomStatus = "available" | "unavailable";

interface IEventHotelRoom {
  id?: string;
  eventHotelId: string;
  roomId: string;
  status: TEventHotelRoomStatus;
  negotiatedValue: number;
  availableQuantity: number;
}
