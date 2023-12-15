import { FastifyReply } from "fastify";

import type { IUserService } from "@modules/users/types";
import { Service } from "@modules/users/decorators";
import { UserError } from "@modules/users/domain/UserError";

import { setCookieHttpOnly } from "@shared/utils";

@Service
export class SignIn {
  service: IUserService;
  sessionTokenAdapter: ISessionTokenAdapter;
  cryptoAdapter: ICryptoAdapter;
  user: IUser;
  email: string;
  password: string;
  response: FastifyReply;

  constructor(attr: {
    sessionTokenAdapter: ISessionTokenAdapter;
    cryptoAdapter: ICryptoAdapter;
    email: string;
    password: string;
    response: FastifyReply;
  }) {
    this.sessionTokenAdapter = attr.sessionTokenAdapter;
    this.cryptoAdapter = attr.cryptoAdapter;
    this.email = attr.email;
    this.password = attr.password;
    this.response = attr.response;
  }

  public async execute() {
    const user = await this.service.getByEmail(this.email);
    this.user = user?.get;
    UserError.invalidSignIn.apply(
      this.user?.email,
      await this.comparePassword()
    );
    return this.generateResponse();
  }

  private async comparePassword() {
    return this.user?.password
      ? await this.cryptoAdapter.decrypt({
          text: this.password,
          hashedText: this.user.password
        })
      : false;
  }

  private getAccessToken() {
    return this.sessionTokenAdapter.createAccessToken(this.user);
  }

  private getRefreshToken() {
    return this.sessionTokenAdapter.createRefreshToken(this.user);
  }

  private generateResponse() {
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    setCookieHttpOnly(this.response, refreshToken);
    return {
      message: "Authenticated successfully",
      error: null,
      statusCode: 200,
      data: {
        accessToken,
        refreshToken
      }
    };
  }
}
