import type { Multipart } from "@fastify/multipart";

import type { IEventService } from "@modules/events/types";
import { Service } from "@modules/events/decorators";
import { EventError } from "@modules/events/domain";

import type { FilePartDTO } from "@shared/types/dtos/multipart/FilePartDTO";

@Service
export class UploadBanner {
  service: IEventService;
  storageFileAdapter: IStorageFileAdapter;
  parts: AsyncIterableIterator<Multipart>;
  banner: IMediaFile;

  public constructor(attr: {
    storageFileAdapter: IStorageFileAdapter;
    parts: AsyncIterableIterator<Multipart>;
  }) {
    this.storageFileAdapter = attr.storageFileAdapter;
    this.parts = attr.parts;
  }

  public async execute() {
    this.banner = await this.extractPartsData(this.parts);
    return this.service
      .uploadBanner(this.banner)
      .then((mediaFile) => ({
        message: `Banner registered successfully on ${this.banner.referenceId}`,
        error: null,
        statusCode: 201,
        data: mediaFile.get
      }));
  }

  private async extractPartsData(
    parts: AsyncIterableIterator<Multipart>
  ): Promise<IMediaFile> {
    let formData: EventUploadFormDataDTO = {
      eventId: "",
      banner: {} as IMediaFile
    };
    let fileParts = [] as FilePartDTO[];
    await this.getTransformedMultipartFormData({
      parts,
      fileParts,
      formData
    });
    const event = await this.service.get(formData.eventId);
    EventError.eventNotFound.apply(event);
    if (event.get.banner) {
      EventError.invalidFilesQuantity.apply(
        [event.get.banner].length
      );
    }
    formData["eventId"] = event.get.id;
    formData["banner"] = await this.handleStorageFiles(
      fileParts,
      formData.eventId
    );
    return formData.banner;
  }

  public async getTransformedMultipartFormData(data: {
    parts: AsyncIterableIterator<Multipart>;
    fileParts: FilePartDTO[];
    formData: EventUploadFormDataDTO;
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
  ): Promise<IMediaFile> {
    const uploadPromises = partFiles.map(async (partFile) => {
      const uploadResult = await this.storageFileAdapter.storeBuffer({
        buffer: partFile.buffer,
        folder: "events",
        fileType: partFile.part.mimetype,
        tableReference: "events",
        referenceId
      });
      return uploadResult;
    });
    const resolvedPromises = await Promise.all(uploadPromises);
    return resolvedPromises[0];
  }
}
