interface ISendMailAdapter {
  confirmEmail(request: {
    email: string;
    name: string;
    randomSixDigitCode: number;
  }): Promise<void>;
  forgotPassword(request: {
    email: string;
    name: string;
    redirectToken: string;
  }): Promise<void>;
}
