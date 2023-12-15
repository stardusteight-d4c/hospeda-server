import { FastifyReply, FastifyRequest } from "fastify";
import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards
} from "@nestjs/common";

import { RoomAdminUseCases } from "@modules/rooms/http/controllers/(admin)";

import { RequireAdminPermission } from "@shared/middlewares/RequireAdminPermission";
import { Reply } from "@shared/response/Reply";
import { Err } from "@shared/errors";

@Controller("rooms")
@UseGuards(RequireAdminPermission)
export class RoomAdminController {
  uc = RoomAdminUseCases;

  @Post("")
  public async register(
    @Body() body: IRoom,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeRegister(body)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Post("media")
  public async uploadImage(
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeUploadImage(req.parts(), req)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Put("")
  public async edit(@Body() body: IRoom, @Res() reply: FastifyReply) {
    return this.uc
      .makeEdit(body)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Delete("media")
  public async deleteImage(
    @Body() body: { roomId: string; images: string[] },
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeDeleteImages(body)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Delete(":id")
  public async remove(
    @Param("id") id: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeDelete(id)
      .execute()
      .then((result) => result)
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
