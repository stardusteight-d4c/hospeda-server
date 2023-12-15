import {
  MediaFile,
  MediaFileError,
} from "@shared/value-objects/media-file";

export class MediaFileValidator {
  #mediaFile: MediaFile;

  constructor(mediaFile: MediaFile) {
    this.#mediaFile = mediaFile;
  }

  public isValidId(): MediaFileValidator {
    const id = this.#mediaFile.get.id;
    MediaFileError.idIsRequired.apply(id);
    return this;
  }

  public isValidReferenceId(): MediaFileValidator {
    const referenceId = this.#mediaFile.get.referenceId;
    MediaFileError.referenceIdIdRequired.apply(referenceId);
    return this;
  }

  public isValidFileType(): MediaFileValidator {
    const fileType = this.#mediaFile.get.fileType;
    MediaFileError.invalidMimeType.apply(fileType);
    return this;
  }

  public isValidTableReference(): MediaFileValidator {
    const tableReference = this.#mediaFile.get.tableReference;
    MediaFileError.tableReferenceIsRequired.apply(tableReference);
    return this;
  }

  public isValidPreloadUrl(): MediaFileValidator {
    const preloadUrl = this.#mediaFile.get.preloadUrl;
    MediaFileError.fieldMustBeUrl.apply(preloadUrl);
    return this;
  }

  public isValidThumbUrl(): MediaFileValidator {
    const thumbUrl = this.#mediaFile.get.thumbUrl;
    MediaFileError.fieldMustBeUrl.apply(thumbUrl);
    return this;
  }

  public isValidMiniUrl(): MediaFileValidator {
    const miniUrl = this.#mediaFile.get.miniUrl;
    MediaFileError.fieldMustBeUrl.apply(miniUrl);
    return this;
  }

  public isValidNormalUrl(): MediaFileValidator {
    const normalUrl = this.#mediaFile.get.normalUrl;
    MediaFileError.fieldMustBeUrl.apply(normalUrl);
    return this;
  }
}
