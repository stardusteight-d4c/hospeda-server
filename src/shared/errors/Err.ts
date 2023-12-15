import { FastifyReply } from "fastify";
import { Exception } from "./Exception";

export class Err {
  #error: Error;
  #reply: FastifyReply;

  constructor(error: Error, reply: FastifyReply) {
    this.#error = error;
    this.#reply = reply;

    if (this.#error instanceof Exception) {
      this.#reply.status(this.#error.statusCode).send(this.#error);
    } else {
      this.#reply.status(501).send({
        message: this.#error.message,
        error: "Internal Server Error",
        statusCode: 501,
        data: null
      });
    }
  }
}
