import { FastifyRequest } from "fastify";

import { JWTSessionTokenAdapter } from "@shared/adapters";

export function getUserRole(req: FastifyRequest) {
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    const accessToken = bearerToken.replace("Bearer ", "");
    const decoded = new JWTSessionTokenAdapter().decodeAccessToken(
      accessToken
    );
    return decoded ? decoded.role : undefined;
  } else {
    return undefined;
  }
}
