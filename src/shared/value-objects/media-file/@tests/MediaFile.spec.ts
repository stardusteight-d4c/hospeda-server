import { describe, expect, it } from "vitest";
import { MediaFile } from "../MediaFile";
import { useMediaFileFactory } from "../MediaFileFactory";

const { makeMediaFile, makeMediaFileError } = useMediaFileFactory();

describe("MediaFile", () => {
  it("must be not able to access the attributes directly", () => {
    const mediaFile = new MediaFile(makeMediaFile());
    // @ts-ignore
    expect(mediaFile.id).toBeUndefined();
    // @ts-ignore
    expect(mediaFile.postalCode).toBeUndefined();
  });

  it("must be able to access the attributes via public get method", () => {
    const mediaFile = new MediaFile(makeMediaFile());
    expect(mediaFile.get.fileType).toStrictEqual(
      makeMediaFile().fileType
    );
    expect(mediaFile.get.referenceId).toStrictEqual(
      makeMediaFile().referenceId
    );
  });

  it("must be able create a MediaFile", () => {
    const mediaFile = new MediaFile(makeMediaFile()).inspect();
    expect(mediaFile.get.tableReference).toStrictEqual(
      makeMediaFile().tableReference
    );
  });

  describe("inspect MediaFile method", () => {
    it("must be created id automatically if not informed", () => {
      expect(() =>
        new MediaFile(makeMediaFile({ id: undefined })).inspect()
      ).not.toThrowError(makeMediaFileError().idIsRequired.error);
    });

    it("must be not able to instance a MediaFile with invalid <id>", () => {
      expect(() =>
        new MediaFile(makeMediaFile({ id: "" })).inspect()
      ).toThrowError(makeMediaFileError().idIsRequired.error);
    });

    it("must be not able to instance a MediaFile without <referenceId>", () => {
      expect(() =>
        new MediaFile(makeMediaFile({ referenceId: null })).inspect()
      ).toThrowError(
        makeMediaFileError().referenceIdIdRequired.error
      );
    });

    it("must be not able to instance a MediaFile with invalid <fileType>", () => {
      expect(() =>
        new MediaFile(makeMediaFile({ fileType: "image" })).inspect()
      ).toThrowError(makeMediaFileError().invalidMimeType.error);
    });

    it("must be not able to instance a MediaFile without <tableReference>", () => {
      expect(() =>
        new MediaFile(
          makeMediaFile({ tableReference: undefined })
        ).inspect()
      ).toThrowError(
        makeMediaFileError().tableReferenceIsRequired.error
      );
    });

    it("must be not able to instance a MediaFile with invalid URLs", () => {
      const fieldsToTest = [
        { field: "preloadUrl" },
        { field: "thumbUrl" },
        { field: "miniUrl" },
        { field: "normalUrl" }
      ];
      fieldsToTest.forEach(({ field }) => {
        const invalidMediaFile = makeMediaFile({
          [field]: undefined
        });
        expect(() =>
          new MediaFile(invalidMediaFile).inspect()
        ).toThrowError(makeMediaFileError().fieldMustBeUrl.error);
      });
    });

    it("must be throw an error when called set method of MediaFile", () => {
      const mediaFile = new MediaFile(makeMediaFile());
      expect(() => {
        mediaFile.set(makeMediaFile());
      }).toThrowError(
        "Cannot modify MediaFile directly. Use the entity-related service that uses this Value Object"
      );
    });
  });
});
