interface IValidationTokenAdapter {
  generate(data: {
    payload: {};
    context: string;
    duration: string;
  }): string;
  decoded(data: { token: string; context: string }): any;
}
