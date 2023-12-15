import { Exception } from "./Exception";

export class BadRequestException extends Exception {
  constructor(message: string) {
    super();
    this.message = message;
    this.error = "Bad Request";
    this.statusCode = 400;
    this.data = null
  }
}
