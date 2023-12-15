import { BadRequestException } from "@shared/errors";

import { Room } from "@modules/rooms/domain";

export class RoomError {
  public static get idIsRequired() {
    const error = `<id> field is required`;
    function apply(id: string) {
      if (!id) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get hotelIdIsRequired() {
    const error = `<hotelId> field is required`;
    function apply(hotelId: string) {
      if (!hotelId) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get hotelIdIsNotAccepted() {
    const error = `<hotelId> property cannot come in room edit`;
    function apply(hotelId: string) {
      if (hotelId) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidName() {
    const error = `<name> field is required, and must contain at least 5 characters`;
    function apply(name: string) {
      if (!name || name.length < 5) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidMaxGuest() {
    const error = `<maxGuest> field is required, must be greater than zero, and must be an integer`;
    function apply(maxGuest: number) {
      if (!maxGuest || maxGuest <= 0 || !Number.isInteger(maxGuest)) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidBeds() {
    const error = `<beds> field is required, must be greater than zero, and must be an integer`;
    function apply(beds: number) {
      if (!beds || beds <= 0 || !Number.isInteger(beds)) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidFilesQuantity() {
    const error1 = `The room can contain a maximum of 10 files`;
    const error2 = `No files were found`;
    function apply(filesLength: number) {
      if (filesLength > 10) {
        throw new BadRequestException(error1);
      }
      if (filesLength === 0) {
        throw new BadRequestException(error2);
      }
    }
    return { error1, error2, apply };
  }

  public static get invalidDescription() {
    const error = `<description> field is invalid, must contain at least 100 characters`;
    function apply(description: string) {
      if (description.length < 100) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidAvailableQuantity() {
    const error = `<availableQuantity> field is required, must be an integer and greater than or equal to zero`;
    function apply(availableQuantity: number) {
      if (
        availableQuantity === undefined ||
        availableQuantity === null ||
        availableQuantity < 0 ||
        !Number.isInteger(availableQuantity)
      ) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidAvailability() {
    const error = `<availability> is invalid, must be <"available" | "unavailable">`;
    function apply(availability: TRoomStatus) {
      const acceptedAvailabilities = ["available", "unavailable"];
      if (!acceptedAvailabilities.includes(availability)) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get roomNotfound() {
    const error = `There is no room corresponding to this <id>`;
    function apply(room: Room) {
      if (!room) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get propertyImagesNotAccepted() {
    const error = `<images> property cannot come in room edition, use media route to upload or delete images`;
    function apply(images: undefined | IMediaFile[]) {
      if (images !== undefined && images !== null) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get propertyIdNotAccepted() {
    const error = `<id> property cannot come in room register`;
    function apply(id: string) {
      if (id) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }
}
