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

import { HotelAdminUseCases } from "@modules/hotels/http/controllers/(admin)";

import { Err } from "@shared/errors";
import { Reply } from "@shared/response/Reply";
import { RequireAdminPermission } from "@shared/middlewares/RequireAdminPermission";

@Controller("hotels")
@UseGuards(RequireAdminPermission)
export class HotelAdminController {
  uc = HotelAdminUseCases;

  @Post("")
  public async register(
    @Body() newHotel: IHotel,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeRegister(newHotel)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Put("")
  public async edit(
    @Body() updatedHotel: IHotel,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeEdit(updatedHotel)
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

  @Delete("media")
  public async deleteImage(
    @Body() body: { hotelId: string; images: string[] },
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeDeleteImages(body)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
