import { FastifyReply } from "fastify";

import type { IUserService } from "@modules/users/types";
import { Service } from "@modules/users/decorators";

import { setCookieHttpOnly } from "@shared/utils";

@Service
export class SignUp {
  service: IUserService;
  sessionTokenAdapter: ISessionTokenAdapter;
  cryptoAdapter: ICryptoAdapter;
  user: IUser;
  response: FastifyReply;

  constructor(attr: {
    response: FastifyReply;
    sessionTokenAdapter: ISessionTokenAdapter;
    cryptoAdapter: ICryptoAdapter;
    user: IUser;
  }) {
    this.response = attr.response;
    this.sessionTokenAdapter = attr.sessionTokenAdapter;
    this.cryptoAdapter = attr.cryptoAdapter;
    this.user = attr.user;
  }

  public async execute() {
    return this.service
      .register({
        ...this.user,
        password: await this.encryptPassword()
      })
      .then((user) => {
        this.user = user.get;
        return this.generateResponse();
      });
  }

  private async encryptPassword() {
    return await this.cryptoAdapter.encrypt(this.user.password);
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

    return this.response.status(200).send({
      message: "Registered successfully",
      error: null,
      statusCode: 201,
      data: {
        accessToken,
        refreshToken
      }
    });
  }
}
