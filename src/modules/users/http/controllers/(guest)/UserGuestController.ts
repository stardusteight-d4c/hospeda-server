import { FastifyReply, FastifyRequest } from "fastify";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res
} from "@nestjs/common";

import { UserGuestUseCases } from "@/modules/users/http/controllers/(guest)";

import { Err } from "@shared/errors";
import { Reply } from "@shared/response/Reply";

@Controller("users")
export class UserGuestController {
  uc = UserGuestUseCases;

  @Post("auth/signup")
  public async signup(
    @Body() body: IUser,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeSignUp(body, reply)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Post("auth/signin")
  public async signin(
    @Body() body: SignInRequestDTO,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeSignIn(body, reply)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Post("auth/confirmEmail")
  public async confirmEmail(
    @Query("email") email: string,
    @Query("name") name: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeConfirmEmail(email, name)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Post("auth/refreshToken")
  public async refreshToken(
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeRefreshToken(req)
      .execute()
      .then((res) => new Reply(res, reply, 200))
      .catch((err) => new Err(err, reply));
  }

  @Post("auth/forgotPassword")
  public async forgotPassword(
    @Query("email") email: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeForgotPassword(email)
      .execute()
      .then((res) => new Reply(res, reply, 200))
      .catch((err) => new Err(err, reply));
  }

  @Put("auth/resetPassword")
  public async resetPassword(
    @Body() body: ResetPasswordDTO,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeResetPassword(body)
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
