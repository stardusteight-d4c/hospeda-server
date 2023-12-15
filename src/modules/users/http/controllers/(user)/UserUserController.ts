import { FastifyReply, FastifyRequest } from "fastify";
import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UseGuards
} from "@nestjs/common";

import { UserUserUseCases } from "@modules/users/http/controllers/(user)";

import { Err } from "@shared/errors";
import { Reply } from "@shared/response/Reply";
import { RequireUserPermission } from "@shared/middlewares/RequireUserRegister";

@Controller("users")
@UseGuards(RequireUserPermission)
export class UserUserController {
  uc = UserUserUseCases;

  @Post("auth/promoter")
  public async registerPromoter(
    @Body() body: CompanyDTO,
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeRegisterPromoter(req, body)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
