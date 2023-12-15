import { Exception } from "./Exception";

export class UnauthorizedException extends Exception {
  constructor(message: string) {
    super();
    this.message = message;
    this.error = "Unauthorized";
    this.statusCode = 401;
    this.data = null
  }
}
