import { Multipart } from "@fastify/multipart";

import type { IRoomService } from "@modules/rooms/types";
import { Service } from "@modules/rooms/decorators";
import { RoomError } from "@modules/rooms/domain/RoomError";

import { FilePartDTO } from "@shared/types/dtos/multipart/FilePartDTO";

@Service
export class UploadImage {
  service: IRoomService;
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
    let formData: RoomUploadFormDataDTO = {
      roomId: "",
      images: []
    };
    let fileParts = [] as FilePartDTO[];
    await this.getTransformedMultipartFormData({
      parts,
      fileParts,
      formData
    });
    RoomError.invalidFilesQuantity.apply(fileParts.length);
    const room = await this.service.get(formData.roomId);
    if (room.get.images) {
      RoomError.invalidFilesQuantity.apply(
        fileParts.length + room.get.images.length
      );
    }
    formData["images"] = await this.handleStorageFiles(
      fileParts,
      formData.roomId
    );
    return formData.images;
  }

  public async getTransformedMultipartFormData(data: {
    parts: AsyncIterableIterator<Multipart>;
    fileParts: FilePartDTO[];
    formData: RoomUploadFormDataDTO;
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
        folder: "rooms",
        fileType: partFile.part.mimetype,
        tableReference: "rooms",
        referenceId
      });
      return uploadResult;
    });
    return await Promise.all(uploadPromises);
  }
}
