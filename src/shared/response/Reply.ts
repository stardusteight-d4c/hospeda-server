import { FastifyReply } from "fastify";

export class Reply {
  #data: any;
  #reply: FastifyReply;
  #status?: number;

  constructor(data: any, reply: FastifyReply, status?: number) {
    this.#data = data;
    this.#reply = reply;
    this.#status = status;

    if (this.#status) {
      this.#reply.status(this.#status).send(this.#data);
    } else {
      this.#reply.send(this.#data);
    }
  }
}
