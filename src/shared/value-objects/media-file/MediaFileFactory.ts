import { MediaFileError } from "@shared/value-objects/media-file";

export function useMediaFileFactory() {
  function makeMediaFile(params?: Partial<IMediaFile>): IMediaFile {
    return {
      fileType: "image/png",
      referenceId: "d52e5107-9004-4ded-8bdf-552edbdc4ba2",
      tableReference: "users",
      preloadUrl: "https://example.com/preload.png",
      miniUrl: "https://example.com/mini.png",
      thumbUrl: "https://example.com/thumb.png",
      normalUrl: "https://example.com/normal.png",
      ...params
    };
  }

  function makeMediaFileError() {
    return MediaFileError;
  }

  return {
    makeMediaFile,
    makeMediaFileError
  };
}
