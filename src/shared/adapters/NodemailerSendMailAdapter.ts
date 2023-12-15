import { transporter } from "@/connect/nodemailer";
import { renderConfirmEmail, renderForgotPassword } from "../views";

export class NodemailerSendMailAdapter implements ISendMailAdapter {
  public constructor() {}

  public async confirmEmail(request: {
    email: string;
    name: string;
    randomSixDigitCode: number;
  }): Promise<void> {
    const { email, name, randomSixDigitCode } = request;
    await transporter.sendMail({
      subject: "Código de Confirmação",
      from: '"Hospeda Eventos" <hospedaeventos.team@gmail.com>',
      to: email,
      text: `Código de Confirmação - aqui está seu código de confirmação`,
      html: renderConfirmEmail({ name, randomSixDigitCode }),
    });
  }

  public async forgotPassword(request: {
    email: string;
    redirectToken: string;
    name: string;
  }): Promise<void> {
    const { email, name, redirectToken } = request;
    await transporter.sendMail({
      subject: "Redefinição de senha",
      from: '"Hospeda Eventos" <hospedaeventos.team@gmail.com>',
      to: email,
      text: `Redefinição de senha - aqui está o link para que você possa escolher uma nova senha`,
      html: renderForgotPassword({ name, redirectToken }),
    });
  }
}
