import { cloudinary } from "@/connect/cloudinary";

export class CloudinaryStorageFileAdapter
  implements IStorageFileAdapter
{
  constructor() {}

  public async storeBuffer(input: {
    buffer: Buffer;
    fileType: string;
    tableReference: string;
    referenceId: string;
    folder: string;
  }): Promise<IMediaFile> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary().uploader.upload_stream(
        {
          folder: input.folder,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            const publicId = result.public_id;
            const mediaFile: IMediaFile = {
              fileType: input.fileType,
              tableReference: input.tableReference,
              referenceId: input.referenceId,
              preloadUrl: this.transformUrl(publicId, "preload"),
              thumbUrl: this.transformUrl(publicId, "thumb"),
              miniUrl: this.transformUrl(publicId, "mini"),
              normalUrl: this.transformUrl(publicId, "normal"),
            };
            resolve(mediaFile);
          }
        }
      );
      uploadStream.end(input.buffer);
    });
  }

  private transformUrl(
    publicId: string,
    typeUrl: "preload" | "thumb" | "mini" | "normal"
  ) {
    if (typeUrl === "preload") {
      return cloudinary().url(publicId, {
        transformation: [{ width: 100, height: 100, crop: "fit" }],
      });
    } else if (typeUrl === "thumb") {
      return cloudinary().url(publicId, {
        transformation: [{ width: 150, height: 150, crop: "fit" }],
      });
    } else if (typeUrl === "mini") {
      return cloudinary().url(publicId, {
        transformation: [{ width: 300, height: 300, crop: "fit" }],
      });
    } else if (typeUrl === "normal") {
      return cloudinary().url(publicId);
    }
  }
}
