import { FastifyReply, FastifyRequest } from "fastify";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards
} from "@nestjs/common";

import { EventPromoterUseCases } from "@modules/events/http/controllers/(promoter)";

import { RequirePromoterPermission } from "@shared/middlewares/RequirePromoterPermission";
import { Reply } from "@shared/response/Reply";
import { Err } from "@shared/errors";

@Controller("events")
@UseGuards(RequirePromoterPermission)
export class EventPromoterController {
  uc = EventPromoterUseCases;

  @Post("")
  public async createSolicition(
    @Body() eventSolicitation: IEvent,
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeCreateSolicitation(eventSolicitation, req)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Post("media")
  public async uploadBanner(
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeUploadBanner(req.parts(), req)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Get("list")
  public async list(
    @Query() query: EventListDTO,
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeList(query, req)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Put("")
  public async edit(
    @Body() updatedEvent: IEvent,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeEdit(updatedEvent)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Delete(":id")
  public async delete(
    @Param("id") id: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeDelete(id)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Delete("media/:id")
  public async deleteBanner(
    @Param("id") eventId: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeDeleteBanner(eventId)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
