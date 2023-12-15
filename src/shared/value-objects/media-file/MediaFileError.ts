export class MediaFileError {
  public static get idIsRequired() {
    const error = `<id> field is required`;
    function apply(id: string) {
      if (!id) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get referenceIdIdRequired() {
    const error = `<referenceId> field is required`;
    function apply(referenceId: string) {
      if (!referenceId) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get invalidMimeType() {
    const error = `<fileType> does not match accepted mime types`;
    function apply(fileType: string) {
      const acceptedMimeTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
      ];
      if (!acceptedMimeTypes.includes(fileType)) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get tableReferenceIsRequired() {
    const error = `<tableReference> is required`;
    function apply(tableReference: string) {
      if (!tableReference) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get fieldMustBeUrl() {
    let error = `field must be a url`;
    function apply(url: string) {
      const urlPrefixes = ["https://", "http://"];
      if (!urlPrefixes.some((prefix) => url?.startsWith(prefix))) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }
}
