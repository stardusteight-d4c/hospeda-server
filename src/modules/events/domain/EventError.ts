import { User } from "@modules/users/domain";
import { Hotel } from "@modules/hotels/domain";

import { BadRequestException } from "@shared/errors";

import { Event } from "./Event";

export class EventError {
  public static get invalidFilesQuantity() {
    const error1 = `The event can contain a maximum of 1 file`;
    const error2 = `No files were found`;
    function apply(filesLength: number) {
      if (filesLength === 1) {
        throw new BadRequestException(error1);
      }
      if (filesLength === 0) {
        throw new BadRequestException(error2);
      }
    }
    return { error1, error2, apply };
  }

  public static get propertyExtrasNotAccepted() {
    const error = `<extras> property cannot come in event register`;
    function apply(extras: TEventExtras) {
      if (extras) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get eventNotFound() {
    const error = `<event> not found`;
    function apply(event: Event) {
      if (!event) {
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

  public static get eventCannotBeDeleted() {
    const error = `Only events with 'pending' and 'rejected' <status> can be deleted`;
    function apply(event: Event) {
      if (
        event.get.status === "pending" ||
        event.get.status === "rejected"
      )
        return;
      throw new BadRequestException(error);
    }
    return { error, apply };
  }

  public static get ownerNotFound() {
    const error = `<ownerId> not found`;
    function apply(owner: User) {
      if (!owner) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get propertyBannerNotAccepted() {
    const error = `<banner> property cannot come in event, use media route to upload or delete the banner`;
    function apply(images: undefined | IMediaFile) {
      if (images !== undefined && images !== null) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }
}
