import { randomUUID } from "node:crypto";

export class EventHotel {
  private props: IEventHotel;

  constructor(props: IEventHotel) {
    props.id === undefined && delete props.id;
    props.id === null && delete props.id;
    this.props = {
      id: props.id ?? randomUUID(),
      ...props,
    };
  }

  public get get(): IEventHotel {
    return this.props;
  }

  public inspect(): EventHotel {
    return this;
  }

  public set(_values: IEventHotel) {
    throw new Error(
      "Cannot modify EventHotel directly. Use the EventHotelService methods instead"
    );
  }
}
