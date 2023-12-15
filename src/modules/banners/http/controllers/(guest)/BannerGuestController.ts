import { FastifyReply } from "fastify";
import { Controller, Get, Res } from "@nestjs/common";

import { BannerGuestUseCases } from "@modules/banners/http/controllers/(guest)";

import { Err } from "@shared/errors";
import { Reply } from "@shared/response/Reply";

@Controller("banners")
export class BannerGuestController {
  uc = BannerGuestUseCases;

  @Get("active")
  public async findAllActiveBanners(@Res() reply: FastifyReply) {
    return this.uc
      .makeFindActiveBanners()
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
