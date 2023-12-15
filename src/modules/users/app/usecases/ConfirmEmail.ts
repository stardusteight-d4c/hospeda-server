import type { IUserService } from "@modules/users/types";
import { Service } from "@modules/users/decorators";
import { UserError } from "@modules/users/domain";

@Service
export class ConfirmEmail {
  service: IUserService;
  email: string;
  name: string;
  sendMailAdapter: ISendMailAdapter;
  randomSixDigitCode: number;
  cryptoAdapter: ICryptoAdapter;

  constructor(attr: {
    email: string;
    name: string;
    sendMailAdapter: ISendMailAdapter;
    cryptoAdapter: ICryptoAdapter;
  }) {
    this.email = attr.email;
    this.name = attr.name;
    this.sendMailAdapter = attr.sendMailAdapter;
    this.randomSixDigitCode = this.generateRandomSixDigitCode();
    this.cryptoAdapter = attr.cryptoAdapter;
  }

  public async execute() {
    UserError.invalidEmail.apply(this.email);
    const findUser = await this.service.getByEmail(this.email);
    UserError.emailAlreadyExists.apply(findUser?.get.email);
    await this.sendMailAdapter.confirmEmail({
      email: this.email,
      name: this.name,
      randomSixDigitCode: this.randomSixDigitCode
    });
    return {
      message: `Code sent to ${this.email}`,
      error: null,
      statusCode: 200,
      data: {
        code: await this.cryptoAdapter.encrypt(
          String(this.randomSixDigitCode)
        )
      }
    };
  }

  private generateRandomSixDigitCode() {
    return Math.floor(100000 + Math.random() * 900000);
  }
}
