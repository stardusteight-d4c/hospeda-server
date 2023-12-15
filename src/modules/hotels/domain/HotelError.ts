import { Event } from "@modules/events/domain";
import { Hotel } from "@modules/hotels/domain";

import { BadRequestException } from "@shared/errors";

export class HotelError {
  public static get idIsRequired() {
    const error = `<id> field is required`;
    function apply(id: string) {
      if (!id) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get hotelNotFound() {
    const error = `<hotel> not found`;
    function apply(hotel: Hotel) {
      if (!hotel) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get nameIsRequired() {
    const error = `<name> field is required`;
    function apply(name: string) {
      if (!name) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get categoriesIsRequired() {
    const error = `<category> field is required`;
    function apply(category: any) {
      if (!category) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get hotelIdDoesNotExist() {
    const error = `Hotel <id> does not exist`;
    function apply(findHotel: Hotel) {
      if (!findHotel) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get eventDoesNotExist() {
    const error = `Event does not exist`;
    function apply(findEvent: Event) {
      if (!findEvent) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidFilesQuantity() {
    const error1 = `The hotel can contain a maximum of 10 files`;
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

  public static get propertyImagesNotAccepted() {
    const error = `<images> property cannot come in hotel edition, use media route to upload or delete images`;
    function apply(images: undefined | IMediaFile[]) {
      if (images !== undefined && images !== null) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get commoditiesMustBeAnArrayOfIds() {
    const error = `<commodities> must be an array of ids`;
    function apply(commodities: any) {
      if (
        Array.isArray(commodities) &&
        commodities.length > 0 &&
        commodities.every((item) => typeof item !== "string")
      ) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get propertyIdNotAccepted() {
    const error = `<id> property cannot come in hotel register`;
    function apply(id: string) {
      if (id) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }
}
