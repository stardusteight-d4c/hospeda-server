export class GetHotelRoomsPriceRangeCommand implements ICommand {
  name = "get_hotel_rooms_price_range";
  constructor(readonly hotelId: string) {}
}
