import { Room, RoomError } from "@modules/rooms/domain";

export class RoomValidator {
  #room: Room;

  public constructor(room: Room) {
    this.#room = room;
  }

  public isValidId(): RoomValidator {
    const id = this.#room.get.id;
    RoomError.idIsRequired.apply(id);
    return this;
  }

  public isValidHotelId(): RoomValidator {
    const hotelId = this.#room.get.hotelId;
    RoomError.hotelIdIsRequired.apply(hotelId);
    return this;
  }

  public isValidName(): RoomValidator {
    const name = this.#room.get.name;
    RoomError.invalidName.apply(name);
    return this;
  }

  public isValidMaxGuest(): RoomValidator {
    const maxGuest = this.#room.get.maxGuest;
    RoomError.invalidMaxGuest.apply(maxGuest);
    return this;
  }

  public isValidBeds(): RoomValidator {
    const beds = this.#room.get.beds;
    RoomError.invalidBeds.apply(beds);
    return this;
  }

  public isValidDescription(): RoomValidator {
    const description = this.#room.get.description;
    RoomError.invalidDescription.apply(description);
    return this;
  }

  // public isValidAvailableQuantity(): RoomValidator {
  //   const availableQuantity = this.#room.get.availableQuantity;
  //   RoomError.invalidAvailableQuantity.apply(availableQuantity);
  //   return this;
  // }

  public isValidAvailability(): RoomValidator {
    const status = this.#room.get.status;
    RoomError.invalidAvailability.apply(status);
    return this;
  }
}
