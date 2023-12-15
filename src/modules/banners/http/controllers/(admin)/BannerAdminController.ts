import { FastifyReply, FastifyRequest } from "fastify";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Res,
  UseGuards
} from "@nestjs/common";

import { BannerAdminUseCases } from "@modules/banners/http/controllers/(admin)";

import { Err } from "@shared/errors";
import { Reply } from "@shared/response/Reply";
import { RequireAdminPermission } from "@shared/middlewares/RequireAdminPermission";

@Controller("banners")
@UseGuards(RequireAdminPermission)
export class BannerAdminController {
  uc = BannerAdminUseCases;

  @Post("")
  public async register(
    @Body() newBanner: IBanner,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeCreate(newBanner)
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

  @Get("")
  public async findAll(@Res() reply: FastifyReply) {
    return this.uc
      .makeFindAll()
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

  @Put("")
  public async edit(
    @Body() updatedBanner: IBanner,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeEdit(updatedBanner)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Patch("reorder")
  public async reorder(
    @Body() updatedPostion: ReorderDTO[],
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeReorder(updatedPostion)
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

  @Delete("media/:bannerId")
  public async deleteImage(
    @Param("bannerId") bannerId: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeDeleteImage(bannerId)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
