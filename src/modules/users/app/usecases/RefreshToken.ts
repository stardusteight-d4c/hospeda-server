import { FastifyRequest } from "fastify";

import type { IUserService } from "@modules/users/types";
import { Service } from "@modules/users/decorators";
import { UserError } from "@modules/users/domain";

@Service
export class RefreshToken {
  service: IUserService;
  sessionTokenAdapter: ISessionTokenAdapter;
  request: FastifyRequest;
  refreshToken: string;
  userInfo: UserTokenDTO;

  constructor(attr: {
    sessionTokenAdapter: ISessionTokenAdapter;
    request: FastifyRequest;
  }) {
    this.sessionTokenAdapter = attr.sessionTokenAdapter;
    this.request = attr.request;
    this.refreshToken = (
      this.request.body as { refreshToken?: string }
    )?.refreshToken;
  }

  public async execute() {
    return await this.generateResponse();
  }

  private async getAccessToken() {
    const user = await this.service.get(this.userInfo.id);
    return this.sessionTokenAdapter.createAccessToken(user.get);
  }

  private getUserInfo() {
    return this.sessionTokenAdapter.decodeRefreshToken(
      this.refreshToken
    );
  }

  private async generateResponse() {
    const refreshDecoded = this.getUserInfo();
    if (refreshDecoded) {
      this.userInfo = refreshDecoded;
    } else {
      return UserError.invalidRefreshToken.apply();
    }
    const newAccessToken = await this.getAccessToken();

    return {
      message: "Refresh successfully",
      error: null,
      statusCode: 200,
      data: {
        accessToken: newAccessToken
      }
    };
  }
}
