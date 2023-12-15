import { randomUUID } from "node:crypto";

import { RoomValidator } from "@modules/rooms/domain";

export class Room {
  private props: IRoom;

  constructor(props: IRoom) {
    props.id === undefined && delete props.id;
    this.props = {
      id: props.id ?? randomUUID(),
      ...props,
    };
  }

  public get get(): IRoom {
    return this.props;
  }

  public inspect(): Room {
    new RoomValidator(this)
      .isValidId()
      .isValidHotelId()
      .isValidName()
      .isValidMaxGuest()
      .isValidBeds()
    return this;
  }

  public set(_values: IRoom) {
    throw new Error(
      "Cannot modify Room directly. Use the RoomService methods instead"
    );
  }
}
