import type { IUserService } from "@modules/users/types";
import { Service } from "@modules/users/decorators";
import { UserError } from "@modules/users/domain";

@Service
export class ForgotPassword {
  service: IUserService;
  email: string;
  user: IUser;
  sendMailAdapter: ISendMailAdapter;
  validationTokenAdapter: IValidationTokenAdapter;
  redirectToken: string;

  constructor(attr: {
    email: string;
    sendMailAdapter: ISendMailAdapter;
    validationTokenAdapter: IValidationTokenAdapter;
  }) {
    this.email = attr.email;
    this.validationTokenAdapter = attr.validationTokenAdapter;
    this.sendMailAdapter = attr.sendMailAdapter;
  }

  public async execute() {
    const findUser = await this.service.getByEmail(this.email);
    UserError.emailNotFound.apply(findUser?.get.email);
    this.user = findUser.get;
    this.redirectToken = this.generateRedirectToken();
    await this.sendMailAdapter.forgotPassword({
      email: this.user.email,
      name: this.user.name,
      redirectToken: this.redirectToken
    });
    return {
      message: `Password recovery email sent to ${this.user.email}`,
      error: null,
      statusCode: 200,
      data: null
    };
  }

  private generateRedirectToken() {
    return this.validationTokenAdapter.generate({
      payload: { email: this.email, userId: this.user.id },
      context: "forgot_password",
      duration: "10min"
    });
  }
}
