interface IStorageFileAdapter {
  storeBuffer(input: {
    buffer: Buffer;
    fileType: string;
    tableReference: string;
    referenceId: string;
    folder: string;
  }): Promise<IMediaFile>;
}
