interface IEventHotel {
  id?: string;
  event: IEvent;
  hotel: IHotel;
  startDateAllotment: Date;
  endDateAllotment: Date;
}
