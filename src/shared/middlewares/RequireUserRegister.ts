import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException
} from "@nestjs/common";

import { JWTSessionTokenAdapter } from "@shared/adapters";

@Injectable()
export class RequireUserPermission implements CanActivate {
  constructor() {}

  private extractTokenFromHeader(
    context: ExecutionContext
  ): string | undefined {
    const request = context.switchToHttp().getRequest();
    if (!request.headers || !request.headers.authorization) {
      throw new UnauthorizedException({
        message: "Missing accessToken authorization",
        error: "Unauthorized",
        statusCode: 401,
        data: null
      });
    }
    const bearerToken = request.headers.authorization;
    return bearerToken.replace("Bearer ", "");
  }

  public async canActivate(
    context: ExecutionContext
  ): Promise<boolean> {
    const accessToken = this.extractTokenFromHeader(context);
    const decoded = new JWTSessionTokenAdapter().decodeAccessToken(
      accessToken
    );
    if (!decoded) {
      throw new UnauthorizedException({
        message: "Access token is invalid or expired",
        error: "Unauthorized",
        statusCode: 401,
        data: null
      });
    }
    if (decoded && decoded.role === "user" || decoded.role === "admin") {
      return true;
    } else {
      throw new UnauthorizedException({
        message: "This endpoint require <user> register permission",
        error: "Unauthorized",
        statusCode: 401,
        data: null
      });
    }
  }
}
