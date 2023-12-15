import jwt from "jsonwebtoken";
export class JWTValidationTokenAdapter
  implements IValidationTokenAdapter
{
  constructor() {}

  generate(data: {
    payload: {};
    context: string;
    duration: string;
  }): string {
    const { payload, context, duration } = data;
    return jwt.sign(
      { ...payload, context },
      process.env.ACCESS_TOKEN_SECRET!,
      {
        expiresIn: duration
      }
    );
  }

  decoded(data: { token: string; context: string }): boolean {
    const { token, context } = data;
    try {
      const decoded: any = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET!
      );
      if (decoded?.context === context) {
        return decoded;
      }
    } catch (error) {
      console.error("Token validation error:", error);
      return false;
    }
    return false;
  }
}
