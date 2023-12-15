import type { IUserService } from "@modules/users/types";
import { Service } from "@modules/users/decorators";

@Service
export class ResetPassword {
  service: IUserService;
  newPassword: string;
  resetPasswordToken: string;
  cryptoAdapter: ICryptoAdapter;
  validationTokenAdapter: IValidationTokenAdapter;

  constructor(attr: {
    newPassword: string;
    resetPasswordToken: string;
    cryptoAdapter: ICryptoAdapter;
    validationTokenAdapter: IValidationTokenAdapter;
  }) {
    this.newPassword = attr.newPassword;
    this.cryptoAdapter = attr.cryptoAdapter;
    this.resetPasswordToken = attr.resetPasswordToken;
    this.validationTokenAdapter = attr.validationTokenAdapter;
  }

  public async execute() {
    const decodedToken = this.validationTokenAdapter.decoded({
      token: this.resetPasswordToken,
      context: "forgot_password"
    });
    const hashedPassword = await this.cryptoAdapter.encrypt(
      this.newPassword
    );
    return this.service
      .modifyPassword({
        newPassword: hashedPassword,
        userId: decodedToken.userId
      })
      .then(() => ({
        message: "Successfully changed password",
        error: null,
        statusCode: 200,
        data: null
      }));
  }
}
