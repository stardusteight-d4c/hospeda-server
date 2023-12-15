import type { Multipart } from "@fastify/multipart";

import type { IHotelService } from "@modules/hotels/types";
import { Service } from "@modules/hotels/decorators";
import { HotelError } from "@modules/hotels/domain";

import type { FilePartDTO } from "@shared/types/dtos/multipart/FilePartDTO";

@Service
export class UploadImage {
  service: IHotelService;
  storageFileAdapter: IStorageFileAdapter;
  parts: AsyncIterableIterator<Multipart>;
  images: IMediaFile[];

  public constructor(attr: {
    storageFileAdapter: IStorageFileAdapter;
    parts: AsyncIterableIterator<Multipart>;
  }) {
    this.storageFileAdapter = attr.storageFileAdapter;
    this.parts = attr.parts;
  }

  public async execute() {
    this.images = await this.extractPartsData(this.parts);
    return this.service
      .uploadImages(this.images)
      .then((mediaFiles) => ({
        message: `Image(s) registered successfully on ${this.images[0].referenceId}`,
        error: null,
        statusCode: 201,
        data: mediaFiles.map((mediaFile) => mediaFile.get)
      }));
  }

  private async extractPartsData(
    parts: AsyncIterableIterator<Multipart>
  ): Promise<IMediaFile[]> {
    let formData: HotelUploadFormDataDTO = {
      hotelId: "",
      images: []
    };
    let fileParts = [] as FilePartDTO[];
    await this.getTransformedMultipartFormData({
      parts,
      fileParts,
      formData
    });
    HotelError.invalidFilesQuantity.apply(fileParts.length);
    const hotel = await this.service.get(formData.hotelId);
    if (hotel.get.images) {
      HotelError.invalidFilesQuantity.apply(
        fileParts.length + hotel.get.images.length
      );
    }
    formData["images"] = await this.handleStorageFiles(
      fileParts,
      formData.hotelId
    );
    return formData.images;
  }

  public async getTransformedMultipartFormData(data: {
    parts: AsyncIterableIterator<Multipart>;
    fileParts: FilePartDTO[];
    formData: HotelUploadFormDataDTO;
  }) {
    const { parts, fileParts, formData } = data;
    for await (const part of parts) {
      if (part.type === "file") {
        if ((await part.toBuffer()).length !== 0) {
          fileParts.push({
            part,
            buffer: await part.toBuffer()
          });
        }
        continue;
      } else {
        formData[part.fieldname] = part.value;
      }
    }
  }

  private async handleStorageFiles(
    partFiles: FilePartDTO[],
    referenceId: string
  ): Promise<IMediaFile[]> {
    const uploadPromises = partFiles.map(async (partFile) => {
      const uploadResult = await this.storageFileAdapter.storeBuffer({
        buffer: partFile.buffer,
        folder: "hotels",
        fileType: partFile.part.mimetype,
        tableReference: "hotels",
        referenceId
      });
      return uploadResult;
    });
    return await Promise.all(uploadPromises);
  }
}
