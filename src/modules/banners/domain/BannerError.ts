import { BadRequestException } from "@shared/errors";
import { Banner } from "./Banner";

export class BannerError {
  public static get propertyImageNotAccepted() {
    const error = `<image> property cannot come in banner, use media route to upload or delete the banner`;
    function apply(images: undefined | IMediaFile) {
      if (images !== undefined && images !== null) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get bannerNotFound() {
    const error = `<banner> not found`;
    function apply(banner: Banner) {
      if (!banner) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidFilesQuantity() {
    const error1 = `The banner can contain a maximum of 1 file`;
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

}
