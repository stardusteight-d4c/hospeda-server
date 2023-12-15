import { FastifyReply, FastifyRequest } from "fastify";
import {
  Controller,
  Get,
  Param,
  Query,
  Req,
  Res
} from "@nestjs/common";

import { EventGuestUseCases } from "@modules/events/http/controllers/(guest)";

import { Err } from "@shared/errors";
import { Reply } from "@shared/response/Reply";

@Controller("events")
export class EventGuestController {
  uc = EventGuestUseCases;

  @Get("")
  public async findBySlug(
    @Query("slug") slug: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeFindBySlug(slug)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get("listPublicApproved")
  public async listPublicApproved(
    @Query() query: EventListDTO,
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeListPublicApproved(query, req)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get("categories")
  public async categories(@Res() reply: FastifyReply) {
    return this.uc
      .makeCategories()
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get("cities")
  public async cities(@Res() reply: FastifyReply) {
    return this.uc
      .makeListCities()
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get("states")
  public async states(@Res() reply: FastifyReply) {
    return this.uc
      .makeListStates()
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get(":eventId/hotels")
  public async findEventHotels(
    @Param("eventId") eventId: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeListEventHotels(eventId)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get(":id")
  public async findOne(
    @Param("id") id: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeFindOne(id)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
