import {
  BcryptCryptoAdapter,
  JWTSessionTokenAdapter,
  JWTValidationTokenAdapter,
  NodemailerSendMailAdapter
} from "@/shared/adapters";
import { getUser } from "@/shared/utils";
import {
  ConfirmEmail,
  FindOne,
  ForgotPassword,
  RefreshToken,
  RegisterPromoter,
  ResetPassword,
  SignIn,
  SignUp
} from "@modules/users/app/usecases";
import { FastifyReply, FastifyRequest } from "fastify";

namespace UserGuestUseCases {
  export function makeSignUp(body: IUser, reply: FastifyReply) {
    return new SignUp({
      cryptoAdapter: new BcryptCryptoAdapter(),
      sessionTokenAdapter: new JWTSessionTokenAdapter(),
      user: body,
      response: reply
    });
  }

  export function makeSignIn(
    body: { email: string; password: string },
    reply: FastifyReply
  ) {
    return new SignIn({
      cryptoAdapter: new BcryptCryptoAdapter(),
      sessionTokenAdapter: new JWTSessionTokenAdapter(),
      email: body.email,
      password: body.password,
      response: reply
    });
  }

  export function makeConfirmEmail(email: string, name: string) {
    return new ConfirmEmail({
      cryptoAdapter: new BcryptCryptoAdapter(),
      sendMailAdapter: new NodemailerSendMailAdapter(),
      email: email,
      name: name
    });
  }

  export function makeForgotPassword(email: string) {
    return new ForgotPassword({
      sendMailAdapter: new NodemailerSendMailAdapter(),
      validationTokenAdapter: new JWTValidationTokenAdapter(),
      email
    });
  }

  export function makeRefreshToken(request: FastifyRequest) {
    return new RefreshToken({
      request,
      sessionTokenAdapter: new JWTSessionTokenAdapter()
    });
  }

  export function makeResetPassword(params: ResetPasswordDTO) {
    return new ResetPassword({
      cryptoAdapter: new BcryptCryptoAdapter(),
      validationTokenAdapter: new JWTValidationTokenAdapter(),
      newPassword: params.newPassword,
      resetPasswordToken: params.token
    });
  }

  export function makeFindOne(id: string) {
    return new FindOne({ id });
  }
}

export default UserGuestUseCases;
