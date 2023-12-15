import { randomUUID } from "node:crypto";

export class EventHotelRoom {
  private props: IEventHotelRoom;

  constructor(props: IEventHotelRoom) {
    props.id === undefined && delete props.id;
    props.id === null && delete props.id;
    this.props = {
      id: props.id ?? randomUUID(),
      ...props
    };
  }

  public get get(): IEventHotelRoom {
    return this.props;
  }

  public inspect(): EventHotelRoom {
    return this;
  }

  public set(_values: IEventHotelRoom) {
    throw new Error(
      "Cannot modify EventHotelRoom directly. Use the EventHotelRoomService methods instead"
    );
  }
}
