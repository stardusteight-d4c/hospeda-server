import { FastifyReply, FastifyRequest } from "fastify";
import {
  Controller,
  Get,
  Param,
  Query,
  Req,
  Res
} from "@nestjs/common";

import { HotelGuestUseCases } from "@modules/hotels/http/controllers/(guest)";

import { Reply } from "@shared/response/Reply";
import { Err } from "@shared/errors";

@Controller("hotels")
export class HotelGuestController {
  uc = HotelGuestUseCases;

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

  @Get("list")
  public async list(
    @Query() query: HotelListDTO,
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeList(query, req)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get("commodities")
  public async commodities(@Res() reply: FastifyReply) {
    return this.uc
      .makeListCommodities()
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

  @Get(":id")
  public async findOne(
    @Param("id") id: string,
    @Query("include") include: string,
    @Query("distance") distance: string,
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeFindOne(id, req, include, distance)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get("events/:eventId")
  public async findEventHotels(
    @Param("eventId") eventId: string,
    @Query("distance") distance: string,
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeFindEventHotels(eventId, req, distance)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
