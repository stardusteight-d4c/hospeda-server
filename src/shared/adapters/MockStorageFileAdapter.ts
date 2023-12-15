import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { FastifyRequest } from "fastify";

export class MockStorageFileAdapter implements IStorageFileAdapter {
  constructor(readonly request: FastifyRequest) {}

  async storeBuffer({
    buffer,
    folder,
    fileType,
    tableReference,
    referenceId
  }: {
    buffer: Buffer;
    folder: string;
    fileType: string;
    tableReference: string;
    referenceId: string;
  }) {
    const id = randomUUID();
    const fileName = `${id}_${Date.now()}.${fileType.split("/")[1]}`;
    const dirPath = path.join("tmp", folder);
    const filePath = path.join(dirPath, fileName);
    try {
      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(filePath, buffer);

      const fullUrl = this.request.protocol
        .concat("://")
        .concat(this.request.hostname);
      const fileUrl = new URL(
        `/tmp/${tableReference}/${fileName}`,
        fullUrl
      ).toString();

      return {
        id,
        fileType,
        tableReference,
        referenceId,
        preloadUrl: fileUrl,
        thumbUrl: fileUrl,
        miniUrl: fileUrl,
        normalUrl: fileUrl
      };
    } catch (error) {
      console.error("Error storing file:", error);
      throw error;
    }
  }
}
