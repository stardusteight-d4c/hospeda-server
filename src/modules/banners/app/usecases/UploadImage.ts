import type { Multipart } from "@fastify/multipart";

import type { IBannerService } from "@modules/banners/types";
import { Service } from "@modules/banners/decorators";
import { BannerError } from "@modules/banners/domain";

import type { FilePartDTO } from "@shared/types/dtos/multipart/FilePartDTO";

@Service
export class UploadImage {
  service: IBannerService;
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
      .uploadImage(this.banner)
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
    let formData: BannerUploadFormDataDTO = {
      bannerId: "",
      image: {} as IMediaFile
    };
    let fileParts = [] as FilePartDTO[];
    await this.getTransformedMultipartFormData({
      parts,
      fileParts,
      formData
    });
    const banner = await this.service.get(formData.bannerId);
    BannerError.bannerNotFound.apply(banner);
    if (banner.get.image) {
      BannerError.invalidFilesQuantity.apply(
        [banner.get.image].length
      );
    }
    formData["bannerId"] = banner.get.id;
    formData["image"] = await this.handleStorageFiles(
      fileParts,
      formData.bannerId
    );
    return formData.image;
  }

  public async getTransformedMultipartFormData(data: {
    parts: AsyncIterableIterator<Multipart>;
    fileParts: FilePartDTO[];
    formData: BannerUploadFormDataDTO;
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
        folder: "banners",
        fileType: partFile.part.mimetype,
        tableReference: "banners",
        referenceId
      });
      return uploadResult;
    });
    const resolvedPromises = await Promise.all(uploadPromises);
    return resolvedPromises[0];
  }
}
