import { FastifyReply, FastifyRequest } from "fastify";
import {
  Controller,
  Get,
  Param,
  Query,
  Req,
  Res
} from "@nestjs/common";

import { RoomGuestUseCases } from "@modules/rooms/http/controllers/(guest)";

import { Reply } from "@shared/response/Reply";
import { Err } from "@shared/errors";

@Controller("rooms")
export class RoomGuestController {
  uc = RoomGuestUseCases;

  @Get("list")
  public async list(
    @Query() query: RoomListDTO,
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
      .makeListCategories()
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

  @Get("hotel/:hotelId/event/:eventId")
  public async findEventHotelRooms(
    @Param() params: FindEventHotelRoomsDTO,
    @Query("checkout") checkout: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeFindEventHotelRooms(params, checkout)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get("hotel/:id")
  public async findByHotel(
    @Param("id") id: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeFindByHotel(id)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
