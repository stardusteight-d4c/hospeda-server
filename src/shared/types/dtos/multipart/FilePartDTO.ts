import { MultipartFile } from "@fastify/multipart";

export interface FilePartDTO {
  part: MultipartFile;
  buffer: Buffer;
}
