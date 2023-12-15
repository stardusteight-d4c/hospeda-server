import { randomUUID } from "node:crypto";
import { MediaFileValidator } from "@shared/value-objects/media-file";

export class MediaFile {
  #id: string;
  #referenceId: string;
  #fileType: string;
  #tableReference: string;
  #preloadUrl: string;
  #thumbUrl: string;
  #miniUrl: string;
  #normalUrl: string;

  public constructor(attr: IMediaFile) {
    this.#id = attr.id ?? randomUUID();
    this.#referenceId = attr.referenceId;
    this.#fileType = attr.fileType;
    this.#tableReference = attr.tableReference;
    this.#preloadUrl = attr.preloadUrl;
    this.#thumbUrl = attr.thumbUrl;
    this.#miniUrl = attr.miniUrl;
    this.#normalUrl = attr.normalUrl;
  }

  public get get(): IMediaFile {
    return {
      id: this.#id,
      referenceId: this.#referenceId,
      fileType: this.#fileType,
      tableReference: this.#tableReference,
      preloadUrl: this.#preloadUrl,
      thumbUrl: this.#thumbUrl,
      miniUrl: this.#miniUrl,
      normalUrl: this.#normalUrl,
    };
  }

  public inspect(): MediaFile {
    new MediaFileValidator(this)
      .isValidId()
      .isValidReferenceId()
      .isValidFileType()
      .isValidTableReference()
      .isValidPreloadUrl()
      .isValidThumbUrl()
      .isValidMiniUrl()
      .isValidNormalUrl()
    return this;
  }

  public set(_values: IMediaFile) {
    throw new Error(
      "Cannot modify MediaFile directly. Use the entity-related service that uses this Value Object"
    );
  }
}
